import { useEffect, useState } from "react";
import {
  getAllOrdersAdmin,
  updateOrderStatusAdmin,
} from "../../api/orderApi";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const { data } = await getAllOrdersAdmin();
      setOrders(data);
    } catch (err) {
      alert("Failed to load orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const statusChangeHandler = async (orderId, status) => {
    await updateOrderStatusAdmin(orderId, status);

    setOrders((prev) =>
      prev.map((o) =>
        o._id === orderId ? { ...o, status } : o
      )
    );
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">
        Admin Orders
      </h1>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-slate-900 border border-slate-800 p-4 rounded"
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-400">
                Order ID: {order._id}
              </span>
              <span className="text-indigo-400 font-semibold">
                ₹{order.totalAmount}
              </span>
            </div>

            <p className="text-sm mb-2">
              User: {order.user.name}
            </p>

            <div className="flex items-center gap-3">
              <span>Status:</span>

              <select
                value={order.status}
                onChange={(e) =>
                  statusChangeHandler(
                    order._id,
                    e.target.value
                  )
                }
                className="bg-slate-800 border border-slate-700 px-3 py-1 rounded"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
                <option value="delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrders;