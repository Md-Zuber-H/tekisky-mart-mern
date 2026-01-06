import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";


const OrderDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const { data } = await axios.get(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrder(data);
    };

    fetchOrder();
  }, [id, user]);

  if (!order) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Order #{order._id}</h1>

      {order.items.map(item => (
        <div
          key={item._id}
          className="flex justify-between border-b border-slate-800 py-2"
        >
          <span>{item.product.name} × {item.quantity}</span>
          <span>₹{item.product.price * item.quantity}</span>
        </div>
      ))}

      <h2 className="mt-6 text-xl">
        Total: <span className="text-indigo-400">₹{order.totalAmount}</span>
      </h2>
    </div>
  );
};

export default OrderDetails;
