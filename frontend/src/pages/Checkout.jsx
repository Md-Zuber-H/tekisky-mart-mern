import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import axios from "../api/axios";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, totalPrice } = useCart();
  const { user } = useAuth();

  const placeOrderHandler = async () => {
    try {
      const { data } = await axios.post(
        "/orders",
        {
          items: cartItems.map(item => ({
            product: item._id,
            quantity: item.qty,
          })),
          totalAmount: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      clearCart();
      navigate(`/orders/${data._id}`);
    } catch (error) {
      alert(error.response?.data?.message || "Order failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        {cartItems.map(item => (
          <div
            key={item._id}
            className="flex justify-between bg-slate-900 border border-slate-800 p-4 rounded-lg"
          >
            <span>{item.name} × {item.qty}</span>
            <span className="text-indigo-400">
              ₹{item.price * item.qty}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">
          Total: <span className="text-indigo-400">₹{totalPrice}</span>
        </h2>

        <button
          onClick={placeOrderHandler}
          className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
