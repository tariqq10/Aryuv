import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import "../styles/productGrid.css";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
