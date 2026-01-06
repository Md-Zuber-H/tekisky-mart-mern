import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, loading, updateQty, removeItem } = useCart();

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

  if (!cart || cart.items.length === 0) {
    return <p className="text-center py-10">Cart is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-white">
      <h1 className="text-2xl font-bold">Your Cart</h1>

      {cart.items.map((item) => (
        <div
          key={item.product._id}
          className="flex justify-between items-center bg-slate-900 p-4 rounded border border-slate-800"
        >
          <div>
            <h3 className="font-semibold">{item.product.name}</h3>
            <p className="text-indigo-400">
              ₹{item.product.price}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                updateQty(item.product._id, Number(e.target.value))
              }
              className="w-16 bg-slate-800 text-center text-white rounded"
            />

            <button
              onClick={() => removeItem(item.product._id)}
              className="text-red-400 hover:text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* CHECKOUT BUTTON */}
      <div className="flex justify-end pt-4 border-t border-slate-800">
        <button
          onClick={() => navigate("/checkout")}
          className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;