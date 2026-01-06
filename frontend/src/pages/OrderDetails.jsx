import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const OrderDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await api.get(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrder(data);
    };

    fetchOrder();
  }, [id, user]);

  if (!order) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200">
      <h1 className="text-2xl font-bold mb-6">
        Order #{order._id}
      </h1>

      {/* ORDER ITEMS */}
      <div className="space-y-3">
        {order.items.map((item) => (
          <div
            key={item._id}
            className="flex justify-between border-b border-slate-800 py-2"
          >
            <span>
              {item.product.name} × {item.quantity}
            </span>
            <span>
              ₹{item.product.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <h2 className="mt-6 text-xl">
        Total:{" "}
        <span className="text-indigo-400">
          ₹{order.totalAmount}
        </span>
      </h2>

      {/* PAYMENT INFO */}
      <div className="mt-4 space-y-1 text-sm">
        <p>
          Payment Method:{" "}
          <span className="text-indigo-400">
            {order.paymentMethod}
          </span>
        </p>

        <p>
          Payment Status:{" "}
          {order.paymentMethod === "COD" ? (
            <span className="text-yellow-400">
              Pay on Delivery
            </span>
          ) : (
            <span className="text-green-400">
              Paid (Fake)
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default OrderDetails;