import React, { useRef, useState, useCallback, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import { Table, TableRow, TableCell, TableHeader } from "@tiptap/extension-table";
import { uploadBlogContentImage } from "../../services/blogService";
import "./RichTextEditor.css";

// Extended Image extension to preserve data-public-id, caption, and alignment
const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      "data-public-id": {
        default: null,
        parseHTML: (element) => element.getAttribute("data-public-id"),
        renderHTML: (attributes) => {
          if (!attributes["data-public-id"]) return {};
          return { "data-public-id": attributes["data-public-id"] };
        },
      },
      alt: {
        default: "",
        parseHTML: (element) => element.getAttribute("alt") || "",
        renderHTML: (attributes) => ({ alt: attributes.alt || "" }),
      },
      title: {
        default: "",
        parseHTML: (element) => element.getAttribute("title") || "",
        renderHTML: (attributes) => {
          if (!attributes.title) return {};
          return { title: attributes.title };
        },
      },
      class: {
        default: "rte-embedded-image rte-img-center",
        parseHTML: (element) => element.getAttribute("class") || "rte-embedded-image rte-img-center",
        renderHTML: (attributes) => ({ class: attributes.class }),
      },
    };
  },
});

/* ── SVG Icons ── */
const DocIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const AlignLeftIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="15" y1="12" x2="3" y2="12" />
    <line x1="17" y1="18" x2="3" y2="18" />
  </svg>
);

const AlignCenterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="6" />
    <line x1="21" y1="12" x2="3" y2="12" />
    <line x1="18" y1="18" x2="6" y2="18" />
  </svg>
);

const AlignRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="21" y1="6" x2="3" y2="6" />
    <line x1="21" y1="12" x2="9" y2="12" />
    <line x1="21" y1="18" x2="7" y2="18" />
  </svg>
);

const PaletteIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
  </svg>
);

const BulletListIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="9" y1="12" x2="20" y2="12" />
    <line x1="9" y1="18" x2="20" y2="18" />
    <circle cx="4" cy="6" r="1.5" fill="currentColor" />
    <circle cx="4" cy="12" r="1.5" fill="currentColor" />
    <circle cx="4" cy="18" r="1.5" fill="currentColor" />
  </svg>
);

const OrderedListIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="10" y1="6" x2="21" y2="6" />
    <line x1="10" y1="12" x2="21" y2="12" />
    <line x1="10" y1="18" x2="21" y2="18" />
    <path d="M4 6h1v4" />
    <path d="M4 10h2" />
    <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
  </svg>
);

const LinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ImageIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const TableIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M3 15h18" />
    <path d="M9 3v18" />
    <path d="M15 3v18" />
  </svg>
);

const CalloutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M8 9h8" />
    <path d="M8 13h5" />
  </svg>
);

const LineIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CodeSourceIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ExpandIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const CollapseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const UndoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

const RedoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
  </svg>
);

const CloudUploadIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 16l-4-4-4 4" />
    <path d="M12 12v9" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const SpinnerIcon = () => (
  <svg className="rte-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
    <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
  </svg>
);

/* ══════════════════════════════════════════════════════════
   RICH TEXT & HTML CODE DUAL EDITOR COMPONENT
══════════════════════════════════════════════════════════ */
const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Start writing your article...",
  error,
  label = "Article Content",
}) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const fileInputModalRef = useRef(null);

  /* ── UI States ── */
  const [editorMode, setEditorMode] = useState("visual"); // 'visual' | 'code'
  const [rawHtml, setRawHtml] = useState(value || "");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  /* ── Modal States ── */
  const [linkModalOpen, setLinkModalOpen] = useState(false);
  const [linkForm, setLinkForm] = useState({
    url: "",
    text: "",
    newTab: true,
  });

  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [imageForm, setImageForm] = useState({
    url: "",
    caption: "",
    alignment: "center", // 'center' | 'left' | 'right'
    publicId: "",
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadError, setUploadError] = useState("");

  /* ── Close custom dropdown on outside click ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Sync rawHtml with external value ── */
  useEffect(() => {
    if (value !== undefined && value !== rawHtml) {
      setRawHtml(value || "");
    }
  }, [value]);

  /* ── TipTap Editor Instance ── */
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
        link: {
          openOnClick: false,
          HTMLAttributes: {
            class: "rte-link",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CustomImage.configure({
        allowBase64: false,
        HTMLAttributes: {
          class: "rte-embedded-image",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      try {
        const html = editor.getHTML();
        const clean = html === "<p></p>" ? "" : html;
        setRawHtml(clean);
        onChange(clean);
      } catch (err) {
        console.error("Editor update error:", err);
      }
    },
    editorProps: {
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer?.files?.length > 0) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith("image/")) {
            event.preventDefault();
            handleDirectFileUpload(file);
            return true;
          }
        }
        return false;
      },
      handlePaste: (view, event) => {
        if (event.clipboardData?.files?.length > 0) {
          const file = event.clipboardData.files[0];
          if (file.type.startsWith("image/")) {
            event.preventDefault();
            handleDirectFileUpload(file);
            return true;
          }
        }
        return false;
      },
    },
  });

  // Sync external value when editor is NOT focused
  useEffect(() => {
    if (editor && !editor.isDestroyed && value !== undefined) {
      try {
        if (!editor.isFocused && editor.getHTML() !== value) {
          editor.commands.setContent(value || "", false);
        }
      } catch (e) {
        console.error("Editor sync error:", e);
      }
    }
  }, [value, editor]);

  /* ── Cloudinary Direct Upload Function ── */
  const uploadToCloudinary = async (file) => {
    if (!file) return null;
    if (!file.type.startsWith("image/")) {
      throw new Error("Please select a valid image file (.jpg, .png, .webp).");
    }
    if (file.size > 10 * 1024 * 1024) {
      throw new Error("Image size must be under 10MB.");
    }

    const formData = new FormData();
    formData.append("image", file);
    return await uploadBlogContentImage(formData);
  };

  /* ── Direct drag-and-drop file upload ── */
  const handleDirectFileUpload = async (file) => {
    setUploadingImage(true);
    setUploadError("");
    try {
      const res = await uploadToCloudinary(file);
      if (res.success && res.url) {
        if (editorMode === "visual" && editor) {
          editor
            .chain()
            .focus()
            .setImage({
              src: res.url,
              alt: file.name || "Blog image",
              "data-public-id": res.public_id,
              class: "rte-embedded-image rte-img-center",
            })
            .run();
        } else {
          const tag = `\n<img src="${res.url}" data-public-id="${res.public_id}" alt="${file.name || "Blog Image"}" class="rte-embedded-image rte-img-center" />\n`;
          const updated = (rawHtml || "") + tag;
          setRawHtml(updated);
          onChange(updated);
        }
      }
    } catch (err) {
      setUploadError(err.message || "Failed to upload image.");
      setTimeout(() => setUploadError(""), 5000);
    } finally {
      setUploadingImage(false);
    }
  };

  /* ── Switch between Visual and HTML Code Source ── */
  const handleToggleMode = () => {
    if (editorMode === "visual") {
      let html = rawHtml;
      try {
        if (editor && !editor.isDestroyed) {
          html = editor.getHTML();
        }
      } catch (e) {
        console.error("Error getting editor HTML:", e);
      }
      const clean = html === "<p></p>" ? "" : html;
      setRawHtml(clean);
      setEditorMode("code");
    } else {
      if (editor && !editor.isDestroyed) {
        try {
          editor.commands.setContent(rawHtml || "", false);
        } catch (e) {
          console.error("Error setting editor content:", e);
        }
      }
      setEditorMode("visual");
    }
  };

  /* ── Handle Raw HTML Code Changes ── */
  const handleCodeChange = (e) => {
    const updated = e.target.value;
    setRawHtml(updated);
    onChange(updated);
  };

  /* ── Hyperlink Modal Handlers ── */
  const openLinkModal = () => {
    let existingUrl = "";
    let selectedText = "";

    if (editor) {
      existingUrl = editor.getAttributes("link").href || "";
      const { from, to } = editor.state.selection;
      selectedText = editor.state.doc.textBetween(from, to, " ");
    }

    setLinkForm({
      url: existingUrl,
      text: selectedText,
      newTab: true,
    });
    setLinkModalOpen(true);
  };

  const handleApplyLink = (e) => {
    e.preventDefault();
    if (!linkForm.url.trim()) return;

    const formattedUrl = /^https?:\/\//i.test(linkForm.url.trim())
      ? linkForm.url.trim()
      : `https://${linkForm.url.trim()}`;

    if (editorMode === "visual" && editor) {
      if (linkForm.text.trim()) {
        // If anchor text was specified or changed
        editor
          .chain()
          .focus()
          .insertContent(
            `<a href="${formattedUrl}" ${linkForm.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}>${linkForm.text.trim()}</a>`
          )
          .run();
      } else {
        editor
          .chain()
          .focus()
          .extendMarkRange("link")
          .setLink({
            href: formattedUrl,
            target: linkForm.newTab ? "_blank" : null,
          })
          .run();
      }
    } else {
      const anchorTag = `<a href="${formattedUrl}" ${linkForm.newTab ? 'target="_blank" rel="noopener noreferrer"' : ""}>${linkForm.text.trim() || formattedUrl}</a>`;
      const updated = (rawHtml || "") + anchorTag;
      setRawHtml(updated);
      onChange(updated);
    }

    setLinkModalOpen(false);
  };

  /* ── Image Modal Handlers ── */
  const openImageModal = () => {
    setImageForm({
      url: "",
      caption: "",
      alignment: "center",
      publicId: "",
    });
    setUploadError("");
    setImageModalOpen(true);
  };

  const handleModalImageUpload = async (file) => {
    if (!file) return;
    setUploadingImage(true);
    setUploadError("");
    try {
      const res = await uploadToCloudinary(file);
      if (res.success && res.url) {
        setImageForm((p) => ({
          ...p,
          url: res.url,
          publicId: res.public_id,
          caption: p.caption || file.name.replace(/\.[^/.]+$/, ""),
        }));
      }
    } catch (err) {
      setUploadError(err.message || "Failed to upload image.");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleApplyImage = (e) => {
    e.preventDefault();
    if (!imageForm.url.trim()) return;

    const alignClass =
      imageForm.alignment === "left"
        ? "rte-img-left"
        : imageForm.alignment === "right"
        ? "rte-img-right"
        : "rte-img-center";

    if (editorMode === "visual" && editor) {
      editor
        .chain()
        .focus()
        .setImage({
          src: imageForm.url.trim(),
          alt: imageForm.caption || "Blog image",
          title: imageForm.caption || "",
          "data-public-id": imageForm.publicId,
          class: `rte-embedded-image ${alignClass}`,
        })
        .run();
    } else {
      const imgTag = `\n<img src="${imageForm.url.trim()}" data-public-id="${imageForm.publicId}" alt="${imageForm.caption || "Blog image"}" class="rte-embedded-image ${alignClass}" />\n`;
      const updated = (rawHtml || "") + imgTag;
      setRawHtml(updated);
      onChange(updated);
    }

    setImageModalOpen(false);
  };

  /* ── Table Insertion (Exact Reference Design) ── */
  const handleInsertTable = () => {
    const tableHTML = `
<table class="rte-table">
  <thead>
    <tr>
      <th>Feature / Specification</th>
      <th>Standard Value</th>
      <th>Compliance Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Purity Grade (%)</td>
      <td>99.8% USP Standard</td>
      <td><span class="rte-badge-green">Certified</span></td>
    </tr>
    <tr>
      <td>Packaging Type</td>
      <td>200L Steel Drum / ISO Tank</td>
      <td><span class="rte-badge-green">Approved</span></td>
    </tr>
  </tbody>
</table>
`;
    if (editorMode === "visual" && editor) {
      editor.chain().focus().insertContent(tableHTML).run();
    } else {
      const updated = (rawHtml || "") + "\n" + tableHTML;
      setRawHtml(updated);
      onChange(updated);
    }
  };

  /* ── Callout Insertion (Exact Reference Design) ── */
  const handleInsertCallout = () => {
    const calloutHTML = `
<div class="rte-callout">
  <div class="rte-callout-header">
    <strong>⚡ Focus Areas / Key Highlights:</strong>
  </div>
  <p>Summarize critical insights, regulatory requirements, or strategic milestones for your organization here.</p>
</div>
`;
    if (editorMode === "visual" && editor) {
      editor.chain().focus().insertContent(calloutHTML).run();
    } else {
      const updated = (rawHtml || "") + "\n" + calloutHTML;
      setRawHtml(updated);
      onChange(updated);
    }
  };

  /* ── Insert Line Divider ── */
  const handleInsertLine = () => {
    if (editorMode === "visual" && editor) {
      editor.chain().focus().setHorizontalRule().run();
    } else {
      const updated = (rawHtml || "") + "\n<hr />\n";
      setRawHtml(updated);
      onChange(updated);
    }
  };

  /* ── Paragraph / Heading Selection ── */
  const selectBlockFormat = (val) => {
    if (!editor) return;
    setDropdownOpen(false);
    if (val === "p") {
      editor.chain().focus().setParagraph().run();
    } else if (val.startsWith("h")) {
      const level = parseInt(val.replace("h", ""), 10);
      editor.chain().focus().toggleHeading({ level }).run();
    }
  };

  const getActiveBlockLabel = () => {
    if (!editor) return "Paragraph";
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    if (editor.isActive("heading", { level: 4 })) return "Heading 4";
    return "Paragraph";
  };

  /* ── Word and Character counts ── */
  const currentText =
    editorMode === "visual" && editor && !editor.isDestroyed
      ? (() => {
          try {
            return editor.getText();
          } catch {
            return (rawHtml || "").replace(/<[^>]*>/g, " ");
          }
        })()
      : (rawHtml || "").replace(/<[^>]*>/g, " ");

  const charCount = currentText.length;
  const wordCount = currentText.trim() ? currentText.trim().split(/\s+/).length : 0;

  return (
    <div
      ref={containerRef}
      className={`rte-card-wrapper ${isFullscreen ? "rte-card-wrapper--fullscreen" : ""}`}
    >
      {/* ── Top Header Section (Exact reference match) ── */}
      <div className="rte-top-header">
        <div className="rte-top-left">
          <DocIcon />
          <h4 className="rte-top-title">
            {label} <span className="rte-req">*</span>
          </h4>
        </div>
        <div className="rte-top-right">
          <span>Switch between Visual Formatter and HTML Code Source anytime.</span>
        </div>
      </div>

      {/* ── Main Editor Container ── */}
      <div className={`rte-container ${error ? "rte-container--error" : ""}`}>
        {/* ── Toolbar ── */}
        <div className="rte-toolbar">
          {/* ── ROW 1: Typography, Inline, Lists, Align, History ── */}
          <div className="rte-toolbar-row rte-toolbar-row--1">
            {/* Left Section: Paragraph Dropdown + Formats */}
            <div className="rte-tool-cluster">
              {/* Custom Dark Theme Paragraph Dropdown (No native OS blue select!) */}
              <div className="rte-custom-dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className={`rte-dropdown-trigger ${dropdownOpen ? "active" : ""}`}
                  onClick={() => setDropdownOpen((p) => !p)}
                  disabled={editorMode === "code"}
                >
                  <span>{getActiveBlockLabel()}</span>
                  <ChevronDownIcon />
                </button>

                {dropdownOpen && (
                  <div className="rte-dropdown-menu">
                    <button
                      type="button"
                      className={`rte-dropdown-item ${getActiveBlockLabel() === "Paragraph" ? "selected" : ""}`}
                      onClick={() => selectBlockFormat("p")}
                    >
                      Paragraph
                    </button>
                    <button
                      type="button"
                      className={`rte-dropdown-item ${getActiveBlockLabel() === "Heading 1" ? "selected" : ""}`}
                      onClick={() => selectBlockFormat("h1")}
                    >
                      Heading 1
                    </button>
                    <button
                      type="button"
                      className={`rte-dropdown-item ${getActiveBlockLabel() === "Heading 2" ? "selected" : ""}`}
                      onClick={() => selectBlockFormat("h2")}
                    >
                      Heading 2
                    </button>
                    <button
                      type="button"
                      className={`rte-dropdown-item ${getActiveBlockLabel() === "Heading 3" ? "selected" : ""}`}
                      onClick={() => selectBlockFormat("h3")}
                    >
                      Heading 3
                    </button>
                    <button
                      type="button"
                      className={`rte-dropdown-item ${getActiveBlockLabel() === "Heading 4" ? "selected" : ""}`}
                      onClick={() => selectBlockFormat("h4")}
                    >
                      Heading 4
                    </button>
                  </div>
                )}
              </div>

              <div className="rte-sep" />

              {/* Inline Formats: B, I, U, S, Palette */}
              <div className="rte-btn-group">
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("bold") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                  disabled={editorMode === "code"}
                  title="Bold (Ctrl+B)"
                >
                  <strong>B</strong>
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("italic") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                  disabled={editorMode === "code"}
                  title="Italic (Ctrl+I)"
                >
                  <em>I</em>
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("underline") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleUnderline().run()}
                  disabled={editorMode === "code"}
                  title="Underline (Ctrl+U)"
                >
                  <u>U</u>
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("strike") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                  disabled={editorMode === "code"}
                  title="Strikethrough"
                >
                  <s>S</s>
                </button>
                <button
                  type="button"
                  className="rte-icon-btn"
                  onClick={() => {
                    if (editor) {
                      const sel = window.getSelection()?.toString();
                      if (sel) {
                        editor
                          .chain()
                          .focus()
                          .insertContent(
                            `<mark style="background:#ff6b1e33; color:#ff9b57; padding:2px 6px; border-radius:4px;">${sel}</mark>`
                          )
                          .run();
                      }
                    }
                  }}
                  disabled={editorMode === "code"}
                  title="Highlight Text"
                >
                  <PaletteIcon />
                </button>
              </div>

              <div className="rte-sep" />

              {/* Lists */}
              <div className="rte-btn-group">
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("bulletList") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleBulletList().run()}
                  disabled={editorMode === "code"}
                  title="Bullet List"
                >
                  <BulletListIcon />
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive("orderedList") ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                  disabled={editorMode === "code"}
                  title="Numbered List"
                >
                  <OrderedListIcon />
                </button>
              </div>

              <div className="rte-sep" />

              {/* Alignment */}
              <div className="rte-btn-group">
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive({ textAlign: "left" }) ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().setTextAlign("left").run()}
                  disabled={editorMode === "code"}
                  title="Align Left"
                >
                  <AlignLeftIcon />
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive({ textAlign: "center" }) ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().setTextAlign("center").run()}
                  disabled={editorMode === "code"}
                  title="Align Center"
                >
                  <AlignCenterIcon />
                </button>
                <button
                  type="button"
                  className={`rte-icon-btn ${editor?.isActive({ textAlign: "right" }) ? "active" : ""}`}
                  onClick={() => editor?.chain().focus().setTextAlign("right").run()}
                  disabled={editorMode === "code"}
                  title="Align Right"
                >
                  <AlignRightIcon />
                </button>
              </div>
            </div>

            {/* Right Section: Undo / Redo */}
            <div className="rte-btn-group rte-btn-group--right">
              <button
                type="button"
                className="rte-icon-btn"
                onClick={() => editor?.chain().focus().undo().run()}
                disabled={editorMode === "code" || !editor?.can().undo()}
                title="Undo (Ctrl+Z)"
              >
                <UndoIcon />
              </button>
              <button
                type="button"
                className="rte-icon-btn"
                onClick={() => editor?.chain().focus().redo().run()}
                disabled={editorMode === "code" || !editor?.can().redo()}
                title="Redo (Ctrl+Y)"
              >
                <RedoIcon />
              </button>
            </div>
          </div>

          {/* ── ROW 2: Insert Actions + HTML Code Toggle + Fullscreen ── */}
          <div className="rte-toolbar-row rte-toolbar-row--2">
            {/* Insert Pills */}
            <div className="rte-pill-group">
              <button
                type="button"
                className={`rte-pill-btn ${editor?.isActive("link") ? "active" : ""}`}
                onClick={openLinkModal}
                disabled={editorMode === "code"}
              >
                <LinkIcon />
                <span>Link</span>
              </button>

              <button
                type="button"
                className={`rte-pill-btn ${uploadingImage ? "loading" : ""}`}
                onClick={openImageModal}
                title="Insert Image into Article (Cloudinary / URL)"
              >
                {uploadingImage ? <SpinnerIcon /> : <ImageIcon />}
                <span>Image</span>
              </button>

              <button
                type="button"
                className="rte-pill-btn"
                onClick={handleInsertTable}
                title="Insert Table"
              >
                <TableIcon />
                <span>Table</span>
              </button>

              <button
                type="button"
                className="rte-pill-btn rte-pill-btn--callout"
                onClick={handleInsertCallout}
                title="Insert Focus / Highlights Callout"
              >
                <CalloutIcon />
                <span>Callout</span>
              </button>

              <button
                type="button"
                className="rte-pill-btn"
                onClick={handleInsertLine}
                title="Insert Horizontal Line"
              >
                <LineIcon />
                <span>Line</span>
              </button>
            </div>

            {/* Right side: HTML Code Toggle + Fullscreen */}
            <div className="rte-right-actions">
              <button
                type="button"
                className={`rte-pill-btn rte-pill-btn--code ${editorMode === "code" ? "active" : ""}`}
                onClick={handleToggleMode}
                title="Switch between Visual Formatter and HTML Code Source"
              >
                <CodeSourceIcon />
                <span>HTML Code</span>
              </button>

              <button
                type="button"
                className="rte-icon-btn rte-expand-btn"
                onClick={() => setIsFullscreen((p) => !p)}
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
              >
                {isFullscreen ? <CollapseIcon /> : <ExpandIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Direct Drop Upload Banner ── */}
        {uploadingImage && !imageModalOpen && (
          <div className="rte-banner rte-banner--info">
            <SpinnerIcon />
            <span>Uploading image directly to Cloudinary CDN... Please wait.</span>
          </div>
        )}

        {uploadError && !imageModalOpen && (
          <div className="rte-banner rte-banner--error">
            <span>⚠️ {uploadError}</span>
          </div>
        )}

        {/* ── Content Viewports (Dual Mode) ── */}
        {editorMode === "visual" ? (
          /* Visual WYSIWYG View */
          <div className="rte-content-area" onClick={() => editor?.chain().focus().run()}>
            <EditorContent editor={editor} className="rte-prosemirror-host" />
          </div>
        ) : (
          /* HTML & CSS Source Code View */
          <div className="rte-code-area">
            <div className="rte-code-bar">
              <span className="rte-code-tag">RAW HTML & CSS SOURCE</span>
              <span className="rte-code-desc">
                Write HTML markup, inline CSS styles, or &lt;style&gt; blocks. Instant sync with Visual mode.
              </span>
            </div>
            <textarea
              className="rte-code-textarea"
              value={rawHtml}
              onChange={handleCodeChange}
              placeholder="<!-- Write custom HTML, CSS, tables, or embeds here... -->"
              spellCheck={false}
            />
          </div>
        )}

        {/* ── Footer Bar (Exact reference match) ── */}
        <div className="rte-footer-bar">
          <div className="rte-footer-status">
            <span
              className={`rte-status-dot ${editorMode === "visual" ? "rte-status-dot--green" : "rte-status-dot--orange"}`}
            />
            <span className="rte-status-text">
              {editorMode === "visual" ? "VISUAL WYSIWYG" : "HTML CODE SOURCE"}
            </span>
            <span className="rte-status-sep">•</span>
            <span className="rte-status-dir">Direction: LTR</span>
          </div>

          <div className="rte-footer-counters">
            <span>
              Words: <strong>{wordCount}</strong>
            </span>
            <span className="rte-status-sep">•</span>
            <span>
              Characters: <strong>{charCount}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
         MODAL 1: INSERT HYPERLINK (Exact match with Screenshot 1)
      ══════════════════════════════════════════════════════════ */}
      {linkModalOpen && (
        <div className="rte-modal-overlay" onClick={() => setLinkModalOpen(false)}>
          <div className="rte-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="rte-modal-head">
              <div className="rte-modal-title">
                <LinkIcon />
                <span>Insert Hyperlink</span>
              </div>
              <button
                type="button"
                className="rte-modal-close"
                onClick={() => setLinkModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleApplyLink} className="rte-modal-body">
              <div className="rte-modal-field">
                <label className="rte-modal-label">
                  Destination URL <span className="rte-modal-req">*</span>
                </label>
                <input
                  type="text"
                  className="rte-modal-input"
                  placeholder="https://example.com"
                  value={linkForm.url}
                  onChange={(e) =>
                    setLinkForm((p) => ({ ...p, url: e.target.value }))
                  }
                  autoFocus
                  required
                />
              </div>

              <div className="rte-modal-field">
                <label className="rte-modal-label">Anchor Text (Optional)</label>
                <input
                  type="text"
                  className="rte-modal-input"
                  placeholder="e.g. Read full technical datasheet"
                  value={linkForm.text}
                  onChange={(e) =>
                    setLinkForm((p) => ({ ...p, text: e.target.value }))
                  }
                />
              </div>

              <div className="rte-modal-checkbox-row">
                <label className="rte-modal-checkbox-label">
                  <input
                    type="checkbox"
                    checked={linkForm.newTab}
                    onChange={(e) =>
                      setLinkForm((p) => ({ ...p, newTab: e.target.checked }))
                    }
                  />
                  <span>Open link in a new tab</span>
                </label>
              </div>

              <div className="rte-modal-footer">
                <button
                  type="button"
                  className="rte-modal-btn rte-modal-btn--cancel"
                  onClick={() => setLinkModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rte-modal-btn rte-modal-btn--primary"
                  disabled={!linkForm.url.trim()}
                >
                  Insert Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
         MODAL 2: INSERT IMAGE (Exact match with Screenshot 2)
      ══════════════════════════════════════════════════════════ */}
      {imageModalOpen && (
        <div className="rte-modal-overlay" onClick={() => setImageModalOpen(false)}>
          <div className="rte-modal-card rte-modal-card--lg" onClick={(e) => e.stopPropagation()}>
            <div className="rte-modal-head">
              <div className="rte-modal-title">
                <ImageIcon />
                <span>Insert Image into Article</span>
              </div>
              <button
                type="button"
                className="rte-modal-close"
                onClick={() => setImageModalOpen(false)}
              >
                <CloseIcon />
              </button>
            </div>

            <form onSubmit={handleApplyImage} className="rte-modal-body">
              {/* Upload Zone */}
              <div className="rte-modal-field">
                <label className="rte-modal-label">Upload from Computer / Device</label>
                <input
                  type="file"
                  ref={fileInputModalRef}
                  style={{ display: "none" }}
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/gif"
                  onChange={(e) => handleModalImageUpload(e.target.files[0])}
                />

                <div
                  className={`rte-upload-dropzone ${uploadingImage ? "loading" : ""}`}
                  onClick={() => fileInputModalRef.current?.click()}
                >
                  {uploadingImage ? (
                    <div className="rte-dropzone-inner">
                      <SpinnerIcon />
                      <span className="rte-dropzone-title">Uploading to Cloudinary CDN...</span>
                      <span className="rte-dropzone-sub">Please wait a moment</span>
                    </div>
                  ) : imageForm.url && imageForm.publicId ? (
                    <div className="rte-dropzone-preview">
                      <img src={imageForm.url} alt="Uploaded preview" />
                      <div className="rte-dropzone-preview-overlay">
                        <span>Click to Change Image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rte-dropzone-inner">
                      <div className="rte-dropzone-icon">
                        <CloudUploadIcon />
                      </div>
                      <span className="rte-dropzone-title">Click to Browse & Upload Image</span>
                      <span className="rte-dropzone-sub">JPG, PNG, WebP up to 10MB</span>
                    </div>
                  )}
                </div>
              </div>

              {uploadError && (
                <div className="rte-modal-error">
                  <span>⚠️ {uploadError}</span>
                </div>
              )}

              {/* OR Divider */}
              <div className="rte-modal-divider-row">
                <span className="rte-modal-divider-line" />
                <span className="rte-modal-divider-text">OR IMAGE WEB URL</span>
                <span className="rte-modal-divider-line" />
              </div>

              {/* Direct URL field */}
              <div className="rte-modal-field">
                <input
                  type="text"
                  className="rte-modal-input"
                  placeholder="https://example.com/photo.jpg"
                  value={imageForm.url}
                  onChange={(e) =>
                    setImageForm((p) => ({ ...p, url: e.target.value, publicId: "" }))
                  }
                />
              </div>

              {/* Caption field */}
              <div className="rte-modal-field">
                <label className="rte-modal-label">Caption (Optional)</label>
                <input
                  type="text"
                  className="rte-modal-input"
                  placeholder="e.g. Chemical Storage Facility"
                  value={imageForm.caption}
                  onChange={(e) =>
                    setImageForm((p) => ({ ...p, caption: e.target.value }))
                  }
                />
              </div>

              {/* Alignment Selector */}
              <div className="rte-modal-field">
                <label className="rte-modal-label">Image Alignment</label>
                <div className="rte-align-pills">
                  <button
                    type="button"
                    className={`rte-align-pill ${imageForm.alignment === "center" ? "active" : ""}`}
                    onClick={() =>
                      setImageForm((p) => ({ ...p, alignment: "center" }))
                    }
                  >
                    Center (Full)
                  </button>
                  <button
                    type="button"
                    className={`rte-align-pill ${imageForm.alignment === "left" ? "active" : ""}`}
                    onClick={() =>
                      setImageForm((p) => ({ ...p, alignment: "left" }))
                    }
                  >
                    Left Wrap
                  </button>
                  <button
                    type="button"
                    className={`rte-align-pill ${imageForm.alignment === "right" ? "active" : ""}`}
                    onClick={() =>
                      setImageForm((p) => ({ ...p, alignment: "right" }))
                    }
                  >
                    Right Wrap
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="rte-modal-footer">
                <button
                  type="button"
                  className="rte-modal-btn rte-modal-btn--cancel"
                  onClick={() => setImageModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rte-modal-btn rte-modal-btn--primary"
                  disabled={!imageForm.url.trim() || uploadingImage}
                >
                  {uploadingImage ? "Uploading..." : "Insert Image"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
