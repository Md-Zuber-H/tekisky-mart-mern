import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition">

      {/* IMAGE */}
      <div className="h-48 bg-slate-800 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-gray-100 truncate">
          {product.name}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-indigo-400 font-bold">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product, 1)}
            className="px-3 py-1.5 text-sm rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
