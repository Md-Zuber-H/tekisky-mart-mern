import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const logoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Tekisky<span className="text-white">Mart</span>
        </Link>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-indigo-400 transition">Home</Link>
          <Link to="/cart" className="hover:text-indigo-400 transition">Cart</Link>
          <Link to="/orders" className="hover:text-indigo-400 transition">Orders</Link>

          {!user ? (
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition"
            >
              Login
            </Link>
          ) : (
            <>
              <span className="text-gray-300">{user.name}</span>
              <button
                onClick={logoutHandler}
                className="px-4 py-1.5 rounded-md bg-red-500 hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
