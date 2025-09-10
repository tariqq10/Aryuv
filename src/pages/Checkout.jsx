import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css"; // import CSS file

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("checkoutForm");
    return saved ? JSON.parse(saved) : { name: "", email: "", address: "" };
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("checkoutForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill out all fields.");
      return;
    }
    clearCart();
    localStorage.removeItem("checkoutForm");
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <h2>🎉 Order Confirmed!</h2>
        <p>Thank you, {formData.name}! Your order will be shipped soon.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Checkout</h2>

        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Address
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Place Order</button>
      </form>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <div className="summary-total">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
