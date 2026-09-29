import Blog from "../models/Blog.js";
import cloudinary from "../config/cloudinary.js";

/* ═══════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════ */

/**
 * Upload a file buffer to Cloudinary.
 * @param {Buffer} buffer - File buffer from multer
 * @param {string} folder  - Cloudinary folder name
 * @returns {Promise<object>} Cloudinary upload result
 */
const uploadToCloudinary = (buffer, folder) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder }, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
    stream.end(buffer);
  });

/**
 * Safely destroy an image from Cloudinary.
 * Errors are caught and logged — they never break the main flow.
 * @param {string} publicId
 */
const safeDestroy = async (publicId) => {
  if (!publicId || typeof publicId !== "string" || !publicId.trim()) return;
  try {
    await cloudinary.uploader.destroy(publicId.trim());
  } catch (err) {
    console.error(`[Cloudinary] Failed to delete asset "${publicId}":`, err.message);
  }
};

/**
 * Extract all <img> tags from blog HTML content that have a Cloudinary URL.
 * Returns an array of { url, public_id } objects.
 * Priority: data-public-id attribute first, then fallback parse from Cloudinary URL.
 * @param {string} html
 * @returns {Array<{url: string, public_id: string}>}
 */
export const extractContentImages = (html = "") => {
  if (!html || typeof html !== "string") return [];

  const images = [];
  const imgTagRegex = /<img[^>]*>/gi;
  const publicIdAttrRegex = /data-public-id=["']([^"']+)["']/i;
  const srcAttrRegex = /src=["']([^"']+)["']/i;

  let match;
  while ((match = imgTagRegex.exec(html)) !== null) {
    const tag = match[0];
    const srcMatch = tag.match(srcAttrRegex);
    const src = srcMatch ? srcMatch[1] : "";

    // 1. Prefer explicit data-public-id attribute (set by our Rich Text Editor)
    const pidMatch = tag.match(publicIdAttrRegex);
    if (pidMatch && pidMatch[1]) {
      images.push({ url: src, public_id: pidMatch[1] });
      continue;
    }

    // 2. Fallback: parse public_id from Cloudinary URL
    if (src && src.includes("cloudinary.com") && src.includes("/upload/")) {
      const afterUpload = src.split("/upload/")[1];
      if (afterUpload) {
        const withoutVersion = afterUpload.replace(/^v\d+\//, ""); // strip version prefix
        const withoutQuery = withoutVersion.split("?")[0]; // strip query string
        const publicId =
          withoutQuery.substring(0, withoutQuery.lastIndexOf(".")) || withoutQuery;
        if (publicId) {
          images.push({ url: src, public_id: publicId });
          continue;
        }
      }
    }
  }

  return images;
};

/**
 * Generate a URL-safe slug from a string.
 * @param {string} text
 * @returns {string}
 */
const toSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/**
 * Resolve a slug to a unique value by appending a numeric suffix when needed.
 * e.g. "my-blog" → "my-blog-2" → "my-blog-3"
 * @param {string} baseSlug
 * @param {string|null} excludeId - MongoDB _id to exclude (used during update)
 * @returns {Promise<string>}
 */
const resolveUniqueSlug = async (baseSlug, excludeId = null) => {
  const buildQuery = (s) =>
    excludeId ? { slug: s, _id: { $ne: excludeId } } : { slug: s };

  if (!(await Blog.findOne(buildQuery(baseSlug)))) return baseSlug;

  let counter = 2;
  while (await Blog.findOne(buildQuery(`${baseSlug}-${counter}`))) {
    counter++;
  }
  return `${baseSlug}-${counter}`;
};

/* ═══════════════════════════════════════════════════════════
   UPLOAD CONTENT IMAGE  (Rich Text Editor — WYSIWYG)
═══════════════════════════════════════════════════════════ */

/**
 * POST /api/blogs/upload-image
 * Uploads a single image from the RTE to Cloudinary.
 * Returns { success, url, public_id }.
 */
export const uploadBlogContentImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No image file provided." });
    }

    const result = await uploadToCloudinary(req.file.buffer, "marque-blogs/content");

    return res.status(200).json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      message: "Image uploaded successfully.",
    });
  } catch (err) {
    console.error("[uploadBlogContentImage] Error:", err.message);
    return res.status(500).json({ success: false, message: "Failed to upload image." });
  }
};

/* ═══════════════════════════════════════════════════════════
   CREATE BLOG
═══════════════════════════════════════════════════════════ */

/**
 * POST /api/blogs
 * Creates a new blog post.
 * - Auto-resolves slug conflicts (never returns 400 for duplicate slug).
 * - Rolls back Cloudinary upload if MongoDB creation fails.
 */
export const createBlog = async (req, res) => {
  let uploadedFeaturedPublicId = null; // Track for rollback on DB error

  try {
    const {
      title,
      slug,
      content,
      category,
      tags,
      status,
      publishDate,
      metaTitle,
      metaDescription,
    } = req.body;

    // ── Validation ──
    if (!title?.trim()) {
      return res.status(400).json({ success: false, message: "Blog title is required." });
    }
    if (!content?.trim()) {
      return res.status(400).json({ success: false, message: "Blog content cannot be empty." });
    }
    if (!category?.trim()) {
      return res.status(400).json({ success: false, message: "Blog category is required." });
    }

    // ── Slug: generate & auto-resolve conflicts ──
    const rawSlug = slug?.trim() ? toSlug(slug.trim()) : toSlug(title.trim()) || `post-${Date.now()}`;
    const finalSlug = await resolveUniqueSlug(rawSlug);

    // ── Featured image upload ──
    let featuredImage = { url: "", public_id: "" };
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "marque-blogs");
      uploadedFeaturedPublicId = result.public_id;
      featuredImage = { url: result.secure_url, public_id: result.public_id };
    }

    // ── Extract embedded content images (for future cleanup tracking) ──
    const contentImages = extractContentImages(content);

    // ── Persist ──
    const blog = await Blog.create({
      title: title.trim(),
      slug: finalSlug,
      content,
      category: category.trim(),
      tags: tags ? tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      status: status || "draft",
      publishDate: publishDate || null,
      metaTitle: metaTitle?.trim() || "",
      metaDescription: metaDescription?.trim() || "",
      featuredImage,
      contentImages,
    });

    return res.status(201).json({ success: true, message: "Blog created successfully.", blog });
  } catch (err) {
    console.error("[createBlog] Error:", err);

    // Rollback: delete uploaded featured image if DB write failed
    if (uploadedFeaturedPublicId) {
      await safeDestroy(uploadedFeaturedPublicId);
    }

    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message).join(", ");
      return res.status(400).json({ success: false, message: messages });
    }
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Duplicate key error. Please use a different slug." });
    }

    return res.status(500).json({ success: false, message: err.message || "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   GET ALL BLOGS  (Admin — with filters & pagination)
═══════════════════════════════════════════════════════════ */

/**
 * GET /api/blogs
 */
export const getAllBlogs = async (req, res) => {
  try {
    const { status, category, search, page = 1, limit = 10 } = req.query;

    const filter = {};
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: "i" };

    const skip = (Number(page) - 1) * Number(limit);

    const [blogs, total, totalPosts, published, drafts] = await Promise.all([
      Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Blog.countDocuments(filter),
      Blog.countDocuments(),
      Blog.countDocuments({ status: "published" }),
      Blog.countDocuments({ status: "draft" }),
    ]);

    return res.status(200).json({
      success: true,
      blogs,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
      },
      stats: { totalPosts, published, drafts },
    });
  } catch (err) {
    console.error("[getAllBlogs] Error:", err.message);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   GET SINGLE BLOG BY ID  (Admin edit)
═══════════════════════════════════════════════════════════ */

/**
 * GET /api/blogs/:id
 */
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }
    return res.status(200).json({ success: true, blog });
  } catch (err) {
    console.error("[getBlogById] Error:", err.message);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   GET BLOG BY SLUG  (Public website)
═══════════════════════════════════════════════════════════ */

/**
 * GET /api/blogs/slug/:slug
 */
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    // Increment view count — fire & forget (non-blocking)
    Blog.updateOne({ _id: blog._id }, { $inc: { views: 1 } }).catch(() => {});

    return res.status(200).json({ success: true, blog });
  } catch (err) {
    console.error("[getBlogBySlug] Error:", err.message);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   UPDATE BLOG
═══════════════════════════════════════════════════════════ */

/**
 * PUT /api/blogs/:id
 *
 * Cloudinary auto-cleanup:
 *   1. If a NEW featured image is uploaded → old featured image is deleted from Cloudinary.
 *   2. If content HTML is updated → images removed from the editor are deleted from Cloudinary.
 */
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    const {
      title,
      slug,
      content,
      category,
      tags,
      status,
      publishDate,
      metaTitle,
      metaDescription,
    } = req.body;

    // ── Slug: update only if changed & still unique ──
    if (slug && slug.trim() !== blog.slug) {
      const cleanSlug = toSlug(slug.trim());
      const conflict = await Blog.findOne({ slug: cleanSlug, _id: { $ne: blog._id } });
      if (conflict) {
        return res
          .status(400)
          .json({ success: false, message: "This slug is already taken by another blog." });
      }
      blog.slug = cleanSlug;
    }

    // ── Featured image: upload new → delete old ──
    if (req.file) {
      const oldPublicId = blog.featuredImage?.public_id;
      const result = await uploadToCloudinary(req.file.buffer, "marque-blogs");
      blog.featuredImage = { url: result.secure_url, public_id: result.public_id };

      // Delete old image from Cloudinary after successful upload
      if (oldPublicId) {
        await safeDestroy(oldPublicId);
      }
    }

    // ── Content: detect removed images → delete from Cloudinary ──
    if (content !== undefined) {
      const newContentImages = extractContentImages(content);
      const oldContentImages = blog.contentImages || [];

      const newPublicIds = new Set(
        newContentImages.map((img) => img.public_id).filter(Boolean)
      );

      // Images that were in old content but are missing in new content → removed by admin
      const removedImages = oldContentImages.filter(
        (img) => img.public_id && !newPublicIds.has(img.public_id)
      );

      if (removedImages.length > 0) {
        // Delete removed images concurrently; safeDestroy absorbs individual errors
        await Promise.all(removedImages.map((img) => safeDestroy(img.public_id)));
      }

      blog.content = content;
      blog.contentImages = newContentImages;
    }

    // ── Scalar field updates ──
    if (title?.trim()) blog.title = title.trim();
    if (category?.trim()) blog.category = category.trim();
    if (tags !== undefined) {
      blog.tags = tags.split(",").map((t) => t.trim()).filter(Boolean);
    }
    if (status) blog.status = status;
    if (publishDate !== undefined) blog.publishDate = publishDate || null;
    if (metaTitle !== undefined) blog.metaTitle = metaTitle.trim();
    if (metaDescription !== undefined) blog.metaDescription = metaDescription.trim();

    await blog.save();

    return res.status(200).json({ success: true, message: "Blog updated successfully.", blog });
  } catch (err) {
    console.error("[updateBlog] Error:", err.message);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message).join(", ");
      return res.status(400).json({ success: false, message: messages });
    }
    return res.status(500).json({ success: false, message: err.message || "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   DELETE BLOG
═══════════════════════════════════════════════════════════ */

/**
 * DELETE /api/blogs/:id
 *
 * Cloudinary auto-cleanup:
 *   1. Deletes the featured image.
 *   2. Deletes ALL embedded content images (tracked in blog.contentImages).
 *   3. Then removes the blog document from MongoDB.
 *
 * All Cloudinary deletions run concurrently for speed.
 * Individual failures are logged but do NOT prevent blog deletion.
 */
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found." });
    }

    // Collect all Cloudinary public_ids
    const publicIdsToDelete = [];

    if (blog.featuredImage?.public_id) {
      publicIdsToDelete.push(blog.featuredImage.public_id);
    }
    (blog.contentImages || []).forEach((img) => {
      if (img.public_id) publicIdsToDelete.push(img.public_id);
    });

    // Delete all assets concurrently (safeDestroy won't throw)
    if (publicIdsToDelete.length > 0) {
      await Promise.all(publicIdsToDelete.map((id) => safeDestroy(id)));
    }

    await blog.deleteOne();

    return res.status(200).json({ success: true, message: "Blog deleted successfully." });
  } catch (err) {
    console.error("[deleteBlog] Error:", err.message);
    return res.status(500).json({ success: false, message: err.message || "Server error." });
  }
};

/* ═══════════════════════════════════════════════════════════
   PUBLIC BLOG LIST  (Website)
═══════════════════════════════════════════════════════════ */

/**
 * GET /api/blogs/public
 * Returns published blogs for the public website.
 * Excludes internal tracking fields (contentImages).
 */
export const getPublicBlogs = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;

    const filter = { status: "published" };
    if (category) filter.category = category;
    if (search) filter.title = { $regex: search, $options: "i" };

    const skip = (Number(page) - 1) * Number(limit);

    const [blogs, total] = await Promise.all([
      Blog.find(filter)
        .sort({ publishDate: -1, createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .select("-contentImages"), // Do not expose internal tracking data publicly
      Blog.countDocuments(filter),
    ]);

    return res.status(200).json({
      success: true,
      blogs,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) {
    console.error("[getPublicBlogs] Error:", err.message);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};
