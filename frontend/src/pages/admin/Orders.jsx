import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const AdminOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("/admin/orders", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setOrders(data);
    };

    fetchOrders();
  }, [user]);

  const updateStatus = async (orderId, status) => {
    await axios.put(
      `/admin/orders/${orderId}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    setOrders(prev =>
      prev.map(o =>
        o._id === orderId ? { ...o, status } : o
      )
    );
  };

  return (
    <div className="p-6 text-gray-200">
      <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

      <div className="space-y-4">
        {orders.map(order => (
          <div
            key={order._id}
            className="bg-slate-900 border border-slate-800 p-4 rounded-lg"
          >
            <div className="flex justify-between mb-2">
              <span>Order ID: {order._id}</span>
              <span className="text-indigo-400">
                ₹{order.totalAmount}
              </span>
            </div>

            <p className="text-sm text-gray-400">
              User: {order.user.name}
            </p>

            <div className="flex items-center gap-4 mt-3">
              <span>Status:</span>

              <select
                value={order.status}
                onChange={e =>
                  updateStatus(order._id, e.target.value)
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