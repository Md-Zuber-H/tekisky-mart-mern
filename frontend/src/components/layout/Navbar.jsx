import { Link } from "react-router-dom";

const Navbar = () => {
  // abhi dummy (auth baad me connect karenge)
  const isLoggedIn = false;

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
          <Link className="hover:text-indigo-400 transition" to="/">
            Home
          </Link>

          <Link className="hover:text-indigo-400 transition" to="/cart">
            Cart
          </Link>

          <Link className="hover:text-indigo-400 transition" to="/orders">
            Orders
          </Link>

          {!isLoggedIn ? (
            <Link
              to="/login"
              className="
                px-4 py-1.5 rounded-md
                bg-gradient-to-r from-indigo-500 to-purple-500
                hover:opacity-90 transition
              "
            >
              Login
            </Link>
          ) : (
            <button
              className="
                px-4 py-1.5 rounded-md
                bg-red-500 hover:bg-red-600 transition
              "
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;