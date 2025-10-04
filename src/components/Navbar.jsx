import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("checkoutForm");
    alert("👋 You’ve been logged out.");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Sample Web 🛒</h1>

      <div className="navbar-links">
        <Link to="/" className="nav-link">
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>

        <Link to="/cart" className="nav-link navbar-cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          Cart
          {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
        </Link>

        <Link to="/checkout" className="nav-link">
          <span className="material-symbols-outlined">payments</span>
          Checkout
        </Link>

        {/* ✅ Only show Admin link for admin users */}
        {token && role === "admin" && (
          <Link to="/admin" className="nav-link">
            <span className="material-symbols-outlined">admin_panel_settings</span>
            Admin
          </Link>
        )}

        {token && (
          <button onClick={handleLogout} className="nav-link logout-btn">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
