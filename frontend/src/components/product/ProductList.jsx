import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

