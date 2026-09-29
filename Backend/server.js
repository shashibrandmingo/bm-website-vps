import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
import connectDB from "./config/db.js";

dotenv.config();

// DATABASE CONNECT
connectDB();

// PORT
const PORT = process.env.PORT || 5000;

// START SERVER
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});

// SERVER ERROR HANDLER (e.g. PORT IN USE)
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`❌ Port ${PORT} is already in use. Please check running processes or change PORT.`);
  } else {
    console.error("❌ Server error:", err);
  }
  process.exit(1);
});

// GRACEFUL SHUTDOWN (FOR PM2 / SYSTEMD / DOCKER ON VPS)
const gracefulShutdown = (signal) => {
  console.log(`\n⚠️  ${signal} received. Closing HTTP server gracefully...`);
  server.close(async () => {
    console.log("🔒 HTTP server closed.");
    try {
      await mongoose.connection.close(false);
      console.log("🔒 MongoDB connection closed.");
      process.exit(0);
    } catch (err) {
      console.error("❌ Error during MongoDB disconnection:", err);
      process.exit(1);
    }
  });

  // Force shutdown after 10s if connections don't drain in time
  setTimeout(() => {
    console.error("⚠️ Forced shutdown after timeout.");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

