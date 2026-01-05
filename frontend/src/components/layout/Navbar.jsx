import { Link } from "react-router-dom";

const Navbar = () => {
  // 🔴 abhi dummy values (baad me context se aayega)
  const isLoggedIn = false;
  const isAdmin = false;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* 🔹 Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Tekisky<span className="text-black">Mart</span>
          </Link>

          {/* 🔹 Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            <Link to="/cart" className="text-gray-700 hover:text-blue-600">
              Cart
            </Link>

            {isLoggedIn && (
              <Link
                to="/orders"
                className="text-gray-700 hover:text-blue-600"
              >
                Orders
              </Link>
            )}

            {/* 🔹 Admin (future use) */}
            {isAdmin && (
              <Link
                to="/admin/dashboard"
                className="text-gray-700 hover:text-blue-600"
              >
                Admin
              </Link>
            )}

            {/* 🔹 Auth buttons */}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>
            ) : (
              <button
                className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
