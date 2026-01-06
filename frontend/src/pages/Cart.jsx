import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, loading, updateQty, removeItem } = useCart();

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (!cart || cart.items.length === 0)
    return <p className="text-center py-10">Cart is empty</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {cart.items.map((item) => (
        <div
          key={item.product._id}
          className="flex justify-between items-center bg-slate-900 p-4 rounded"
        >
          <div>
            <h3 className="text-white">{item.product.name}</h3>
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
              className="text-red-400"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;