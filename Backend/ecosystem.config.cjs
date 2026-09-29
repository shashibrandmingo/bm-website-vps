module.exports = {
  apps: [
    {
      name: "brandmingo-backend",
      script: "server.js",
      cwd: __dirname,
      instances: 1, // Set to "max" or 2 if running in cluster mode
      exec_mode: "fork", // Use "cluster" if instances > 1
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      time: true,
    },
  ],
};
