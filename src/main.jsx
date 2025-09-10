import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter basename="/Aryuv/">
        <App />
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);
