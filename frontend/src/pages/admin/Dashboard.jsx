import { useEffect, useState } from "react";
import { getAdminStats } from "../../api/adminStatsApi";

const AdminDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats();
        setStats(data);
      } catch (err) {
        alert("Failed to load dashboard stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <p className="p-6 text-gray-400">Loading dashboard...</p>;
  }

  return (
    <div className="p-6 text-white space-y-6">
      <h1 className="text-2xl font-bold">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* PRODUCTS */}
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-400">
            {stats.totalProducts}
          </p>
        </div>

        {/* ORDERS */}
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Orders</h3>
          <p className="text-3xl font-bold text-indigo-400">
            {stats.totalOrders}
          </p>
        </div>

        {/* USERS */}
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Users</h3>
          <p className="text-3xl font-bold text-indigo-400">
            {stats.totalUsers}
          </p>
        </div>

        {/* REVENUE */}
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Revenue</h3>
          <p className="text-3xl font-bold text-green-400">
            ₹{stats.totalRevenue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;