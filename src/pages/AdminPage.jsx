import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/admin.css";

export default function AdminPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role"); // store user role after login

  useEffect(() => {
    if (!token || role !== "admin") {
      alert("⛔ Access denied. Admins only!");
      navigate("/home");
    }
  }, [token, role, navigate]);

  return (
    <div className="admin-container">
      <h1>🛠️ Admin Dashboard</h1>
      <p>Welcome, Admin! Manage your products, users, and orders here.</p>

      <div className="admin-sections">
        <div className="admin-card">
          <h2>Manage Products</h2>
          <p>Add, edit, or remove products from the store.</p>
          <button className="admin-btn">Go to Products</button>
        </div>

        <div className="admin-card">
          <h2>View Orders</h2>
          <p>Check current and completed orders.</p>
          <button className="admin-btn">View Orders</button>
        </div>

        <div className="admin-card">
          <h2>User Management</h2>
          <p>Monitor users and their permissions.</p>
          <button className="admin-btn">Manage Users</button>
        </div>
      </div>
    </div>
  );
}
