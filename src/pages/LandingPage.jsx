import { Link } from "react-router-dom";
import "../styles/landing.css";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <h1>Welcome to Sample Web 🛍️</h1>
      <p>Your one-stop shop for everything great!</p>

      <div className="landing-buttons">
        <Link to="/signup" className="btn primary-btn">Sign Up</Link>
        <Link to="/login" className="btn secondary-btn">Login</Link>
      </div>
    </div>
  );
}
