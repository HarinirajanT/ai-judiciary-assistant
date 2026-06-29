import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAdminStats,
  getAdminUsers,
  getAdminCases,
  updateUserRole,
} from "../services/api";
import "../styles/dashboard.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const [statsRes, usersRes, casesRes] = await Promise.all([
        getAdminStats(),
        getAdminUsers(),
        getAdminCases(),
      ]);
      setStats(statsRes.data);
      setUsers(usersRes.data);
      setCases(casesRes.data);
    } catch (err) {
      setError(err.response?.data?.detail || "Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId, newRole) => {
    try {
      await updateUserRole(userId, newRole);
      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
      );
    } catch (err) {
      alert(err.response?.data?.detail || "Failed to update role");
    }
  };

  const getStatusBadge = (status) => {
    const map = {
      pending: "badge-pending",
      active: "badge-active",
      resolved: "badge-resolved",
      rejected: "badge-rejected",
    };
    return map[status] || "badge-default";
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">Loading admin panel...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>👑 Admin Panel</h1>
        <p>Manage users, cases, and system overview</p>
      </div>

      {error && (
        <div className="error-message-box">
          <span className="error-icon">⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <div className="action-buttons" style={{ marginBottom: "1.5rem" }}>
        {["overview", "users", "cases"].map((tab) => (
          <button
            key={tab}
            className={`action-btn ${activeTab === tab ? "action-btn-primary" : "action-btn-secondary"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "overview" && stats && (
        <>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{stats.totalUsers}</div>
              <div className="stat-label">Total Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.totalCases}</div>
              <div className="stat-label">Total Cases</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.pendingCases}</div>
              <div className="stat-label">Pending</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.activeCases}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{stats.resolvedCases}</div>
              <div className="stat-label">Resolved</div>
            </div>
          </div>

          <div className="case-form-container" style={{ marginTop: "2rem" }}>
            <h3>Users by Role</h3>
            <div className="stats-grid" style={{ marginTop: "1rem" }}>
              {Object.entries(stats.usersByRole || {}).map(([role, count]) => (
                <div key={role} className="stat-card">
                  <div className="stat-value">{count}</div>
                  <div className="stat-label">{role.replace("_", " ")}</div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "users" && (
        <div className="cases-table-container">
          <table className="cases-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status-badge badge-active`}>
                      {user.role.replace("_", " ")}
                    </span>
                  </td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.id, e.target.value)}
                      className="form-input"
                      style={{ width: "auto", padding: "0.375rem 0.75rem" }}
                    >
                      <option value="lawyer">Lawyer</option>
                      <option value="judge">Judge</option>
                      <option value="court_staff">Court Staff</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "cases" && (
        <div className="cases-table-container">
          <table className="cases-table">
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Title</th>
                <th>Type</th>
                <th>Court</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c) => (
                <tr key={c._id}>
                  <td style={{ fontFamily: "monospace" }}>{c.caseId}</td>
                  <td>{c.caseTitle}</td>
                  <td>{c.caseType}</td>
                  <td>{c.court}</td>
                  <td>
                    <span className={`status-badge ${getStatusBadge(c.status)}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cases.length === 0 && (
            <p style={{ textAlign: "center", color: "#64748b", padding: "2rem" }}>
              No cases submitted yet
            </p>
          )}
        </div>
      )}

      <div className="action-buttons" style={{ marginTop: "2rem" }}>
        <button className="action-btn action-btn-secondary" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
