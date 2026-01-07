import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden
                 hover:shadow-lg hover:shadow-indigo-500/20"
    >
      {/* IMAGE */}
      <div className="h-48 bg-slate-800 flex items-center justify-center overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.3 }}
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

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart(product._id, 1)}
            className="px-3 py-1.5 text-sm rounded-md
                       bg-gradient-to-r from-indigo-500 to-purple-500
                       hover:opacity-90 transition"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

