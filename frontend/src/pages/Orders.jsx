import { useEffect } from "react";
import { useOrders } from "../context/OrderContext";
import Loader from "../components/common/Loader";

const Orders = () => {
  const { orders, loading, loadMyOrders } = useOrders();

  useEffect(() => {
    loadMyOrders();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-400">No orders found.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-slate-900 border border-slate-800 rounded-lg p-4"
            >
              <p className="text-sm text-gray-400">
                Order ID: {order._id}
              </p>
              <p>Total: ₹{order.totalPrice}</p>
              <p>Status: {order.isPaid ? "Paid" : "Pending"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
