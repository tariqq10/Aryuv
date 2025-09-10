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
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/cart" className="nav-link navbar-cart">
          Cart
          {itemCount > 0 && (
            <span className="cart-badge">{itemCount}</span>
          )}
        </Link>
        <Link to="/checkout" className="nav-link">Checkout</Link>
      </div>
    </nav>
  );
}
