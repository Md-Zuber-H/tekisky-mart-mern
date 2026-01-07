import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `block px-3 py-2 rounded transition ${
    isActive
      ? "bg-indigo-600 text-white"
      : "hover:text-indigo-400 text-gray-300"
  }`;

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-4">
      <h2 className="text-xl font-bold text-indigo-400 mb-6">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          Products
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          Orders
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;