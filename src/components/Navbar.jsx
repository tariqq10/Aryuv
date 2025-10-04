import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("checkoutForm");
    alert("👋 You’ve been logged out.");
    navigate("/"); // back to landing
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

        {/* ✅ Only show logout if logged in */}
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
