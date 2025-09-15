import React from "react";
import "../styles/ProductDetails.css"; // import the CSS file

export default function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      
      <div className="product-info">
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}
