import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4 text-gray-300">
      <nav className="space-y-3">
        <Link to="/admin/dashboard" className="block hover:text-indigo-400">
          Dashboard
        </Link>

        <Link to="/admin/products" className="block hover:text-indigo-400">
          Products
        </Link>

        <Link to="/admin/orders" className="block hover:text-indigo-400">
          Orders
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;