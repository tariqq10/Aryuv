import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/navbar.css"; // ✅ Import custom styles

export default function Navbar() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

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
          {itemCount > 0 && (
            <span className="cart-badge">{itemCount}</span>
          )}
        </Link>

        <Link to="/checkout" className="nav-link">
          <span className="material-symbols-outlined">payments</span>
          Checkout
        </Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
<Link to="/login" className="nav-link">Login</Link>

      </div>
    </nav>
  );
}
