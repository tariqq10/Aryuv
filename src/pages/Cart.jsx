import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-grid">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div>
                    <h3 className="item-name">{item.name}</h3>
                    <p className="item-price">
                      ${item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3>Subtotal ({cart.length} items):</h3>
            <p className="total-price">${total}</p>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
            <button onClick={clearCart} className="clear-btn">
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
