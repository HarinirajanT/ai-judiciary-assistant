import axios from "axios";
import { API_BASE } from "../config";

const api = axios.create({
  baseURL: API_BASE,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = `${process.env.PUBLIC_URL || ""}/login`;
    }
    return Promise.reject(error);
  }
);

export default api;

// ---------------- AUTH ----------------

export const registerUser = (data) =>
  api.post("/auth/register", data);

export const loginUser = (data) =>
  api.post("/auth/login", data);

export const getCurrentUser = () =>
  api.get("/auth/me");

export const updateProfile = (data) =>
  api.put("/auth/update-profile", data);

// ---------------- LAW GPT ----------------

export const sendMessage = (question) =>
  api.post("/lawgpt/chat", { question });

export const saveChat = (data) =>
  api.post("/lawgpt/save", data);

export const getChatHistory = () =>
  api.get("/lawgpt/history");

export const getChatById = (id) =>
  api.get(`/lawgpt/chat/${id}`);

// ---------------- CASE ----------------

export const submitCase = (data) =>
  api.post("/cases/submit", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const trackCase = (caseId) =>
  api.get(`/cases/track/${caseId}`);

export const getLawyerCases = () =>
  api.get("/dashboard/lawyer/my-cases");

export const getJudgeCases = () =>
  api.get("/dashboard/judge/court-cases");

export const getUserCases = (userId) =>
  api.get(`/cases/user/${userId}`);

export const getCaseById = (caseId) =>
  api.get(`/cases/${caseId}`);

export const getCaseStats = (userId) =>
  api.get(`/cases/stats/${userId}`);

export const getRecentCases = (userId, limit = 20) =>
  api.get(`/cases/recent/${userId}?limit=${limit}`);

export const getAllCases = () =>
  api.get("/cases/all");

export const updateCase = (caseId, data) =>
  api.put(`/cases/${caseId}`, data);

export const deleteCase = (caseId) =>
  api.delete(`/cases/${caseId}`);

// ---------------- ADMIN ----------------

export const getAdminStats = () =>
  api.get("/admin/stats");

export const getAdminUsers = () =>
  api.get("/admin/users");

export const getAdminCases = () =>
  api.get("/admin/cases");

export const updateUserRole = (userId, role) =>
  api.put(`/admin/users/${userId}/role`, { role });
