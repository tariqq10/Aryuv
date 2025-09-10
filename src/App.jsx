import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page content */}
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
