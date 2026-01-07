import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import Loader from "../components/common/Loader";
import ProductList from "../components/product/ProductList";
import VoiceSearch from "../components/common/VoiceSearch";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 🔍 search filter (text + voice)
  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [keyword, products]);

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="text-center text-red-400 py-10">
        {error}
      </p>
    );

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold">
          Latest Products
        </h1>

        {/* SEARCH BAR + VOICE */}
        <div className="flex gap-2 w-full sm:w-[400px]">
          <input
            type="text"
            placeholder="Search products..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-1 bg-slate-800 text-white px-4 py-2 rounded-md outline-none"
          />

          <VoiceSearch onResult={setKeyword} />
        </div>
      </div>

      {/* PRODUCTS */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;