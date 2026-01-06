import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, loading } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [placing, setPlacing] = useState(false);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!cart || cart.items.length === 0)
    return <p className="text-center py-10">Cart is empty</p>;

  const placeOrderHandler = async () => {
    try {
      setPlacing(true);

      const { data } = await api.post("/orders", {
        items: cart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        paymentMethod,
      });

      navigate(`/orders/${data._id}`);
    } catch (error) {
      alert(error.response?.data?.message || "Order failed");
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {/* ITEMS */}
      <div className="space-y-3">
        {cart.items.map((item) => (
          <div
            key={item.product._id}
            className="flex justify-between bg-slate-900 p-3 rounded"
          >
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span className="text-indigo-400">
              ₹{item.product.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* PAYMENT METHOD */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Payment Method</h2>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            value="ONLINE"
            checked={paymentMethod === "ONLINE"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Online (Fake)
        </label>
      </div>

      {/* TOTAL + BUTTON */}
      <div className="flex justify-between items-center border-t border-slate-800 pt-4">
        <h2 className="text-xl font-bold">
          Total:{" "}
          <span className="text-indigo-400">
            ₹{cart.totalPrice}
          </span>
        </h2>

        <button
          onClick={placeOrderHandler}
          disabled={placing}
          className="px-6 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 disabled:opacity-50"
        >
          {placing ? "Placing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
