import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AdminSidebar from "./AdminSidebar";

const Layout = ({ admin }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <Navbar />

      <div className="flex">
        {admin && <AdminSidebar />}

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;