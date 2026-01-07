import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import { getCategories } from "../api/categoryApi";

import Loader from "../components/common/Loader";
import ProductList from "../components/product/ProductList";
import VoiceSearch from "../components/common/VoiceSearch";
import PageWrapper from "../components/common/PageWrapper";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getCategories(),
        ]);

        setProducts(productsData);
        setFilteredProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /* FILTER LOGIC */
  useEffect(() => {
    let filtered = [...products];

    // 1️⃣ CATEGORY FILTER
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (p) => p.category?.name === selectedCategory
      );
    }

    // 2️⃣ SEARCH / VOICE FILTER
    if (keyword.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }

    // 3️⃣ PRICE FILTER
    filtered = filtered.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    setFilteredProducts(filtered);
  }, [
    products,
    selectedCategory,
    keyword,
    minPrice,
    maxPrice,
  ]);

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="text-center text-red-400 py-10">
        {error}
      </p>
    );

  return (
    <PageWrapper>
      <div className="space-y-8">
        {/* HEADER */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">
            Latest Products
          </h1>

          {/* SEARCH */}
          <div className="flex gap-2 max-w-md">
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search products..."
              className="flex-1 bg-slate-800 px-4 py-2 rounded"
            />
            <VoiceSearch onResult={setKeyword} />
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-1.5 rounded-full text-sm ${selectedCategory === "all"
              ? "bg-indigo-600 text-white"
              : "bg-slate-800 text-gray-300"
              }`}
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-1.5 rounded-full text-sm ${selectedCategory === cat.name
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-gray-300"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        <ProductList products={filteredProducts} />
      </div>
    </PageWrapper>
  );
};

export default Home;