module.exports = {
  apps: [
    {
      name: "brandmingo-frontend",
      script: "npm",
      args: "run preview -- --port 3006 --host",
      cwd: __dirname,
      autorestart: true,
      watch: false,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
