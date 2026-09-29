import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ================= TRUST PROXY (REQUIRED FOR VPS / REVERSE PROXY) =================
// Allows Express to detect correct client IP, protocol (HTTPS), and headers behind Nginx
app.set("trust proxy", 1);

// ================= REDIRECT WWW TO NON-WWW =================
app.use((req, res, next) => {
  const host = req.headers.host;
  if (host && host.startsWith("www.")) {
    const protocol = req.headers["x-forwarded-proto"] || req.protocol || "https";
    const newHost = host.replace(/^www\./, "");
    return res.redirect(301, `${protocol}://${newHost}${req.originalUrl}`);
  }
  next();
});

// ================= CORS =================
// In production, allow both apex domain and www subdomain
const rawOrigins = [
  process.env.CLIENT_URL,          // e.g. https://brandmingo.in
  "https://brandmingo.in",
  "https://www.brandmingo.in",
  "http://brandmingo.in",
  "http://www.brandmingo.in",
  "https://brandmingo.com",
  "https://www.brandmingo.com",
  "http://brandmingo.com",
  "http://www.brandmingo.com",
  "http://localhost:5173",          // local dev
  "http://localhost:3000",          // alternate local
].filter(Boolean); // remove undefined/empty values

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow server-to-server requests (no Origin header) and listed origins
      if (!origin || rawOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: origin "${origin}" not allowed.`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

// ================= SECURITY =================
app.use(
  helmet({
    contentSecurityPolicy: false, // Avoid blocking inline scripts/styles if needed in production
  })
);

// ================= LOGS =================
// Use 'combined' (Apache-style) in production for full request logs,
// 'dev' (colorized short) in development.
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// ================= BODY PARSER =================
// Increase limit to 10mb — rich text editor can produce large HTML with embedded data
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ================= COOKIE =================
app.use(cookieParser());

// ================= STATIC FILES (FRONTEND BUILD) =================
app.use(express.static(path.join(__dirname, "dist")));

// ================= API ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ================= HEALTH CHECK (VPS / PM2 / UPTIME MONITOR) =================
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// ================= FRONTEND SPA FALLBACK ROUTE =================
app.use((req, res) => {
  // Try multiple possible paths for dist/index.html
  const possiblePaths = [
    path.join(__dirname, "dist", "index.html"),
    path.join(process.cwd(), "dist", "index.html"),
  ];

  const indexPath = possiblePaths.find((p) => fs.existsSync(p));

  if (indexPath) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    fs.createReadStream(indexPath).pipe(res);
  } else {
    res.status(404).send("Not Found: index.html missing. Paths checked: " + possiblePaths.join(", "));
  }
});

export default app;