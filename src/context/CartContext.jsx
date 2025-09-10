import React, { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        toast.info(`${product.name} quantity updated in cart 🛒`);
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} added to cart 🛒`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.warn(`${item?.name || "Item"} removed from cart ❌`);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
    toast.info("Cart updated 🔄");
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.error("Cart cleared 🗑️");
  };

  const checkout = () => {
    toast.success("Proceeding to checkout ✅");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ✅ Custom hook so you can just do: const { cart, addToCart } = useCart();
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
