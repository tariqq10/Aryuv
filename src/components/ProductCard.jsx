import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/productCard.css"; // ✅ import external CSS

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
}
