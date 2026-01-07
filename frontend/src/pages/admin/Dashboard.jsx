const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-400">—</p>
        </div>

        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Orders</h3>
          <p className="text-3xl font-bold text-indigo-400">—</p>
        </div>

        <div className="bg-slate-900 p-6 rounded border border-slate-800">
          <h3 className="text-gray-400">Total Users</h3>
          <p className="text-3xl font-bold text-indigo-400">—</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;