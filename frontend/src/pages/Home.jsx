import { useEffect, useState } from "react";
import { getAllProducts } from "../api/productApi";
import Loader from "../components/common/Loader";
import ProductList from "../components/product/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  if (error)
    return (
      <p className="text-center text-red-400 py-10">
        {error}
      </p>
    );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Latest Products
      </h1>

      <ProductList products={products} />
    </div>
  );
};

export default Home;
