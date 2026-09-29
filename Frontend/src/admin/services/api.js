import axios from "axios";

// ================================================================
// AXIOS API INSTANCE
//
// How baseURL works:
//   LOCAL DEV   → Vite proxy forwards /api/* → http://localhost:5000
//                 (configured in vite.config.js), so baseURL = "/api"
//   PRODUCTION  → Frontend is served BY the Express backend itself.
//                 so /api/* goes directly to the same server.
//                 No VITE_API_URL needed — relative "/api" works.
//
// Separate deployments: set VITE_API_URL=https://api.yourdomain.com
//                       in Frontend/.env.production
// ================================================================

const API_BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";

const API = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// ── REQUEST INTERCEPTOR: Attach JWT token from localStorage ──
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// ── RESPONSE INTERCEPTOR: Auto-logout on 401 Unauthorized ──
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminInfo");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  },
);

export default API;
