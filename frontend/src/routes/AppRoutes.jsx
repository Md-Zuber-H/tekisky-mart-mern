import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";

import AdminOrders from "../pages/admin/Orders";
import AdminProducts from "../pages/admin/Products";
import AdminDashboard from "../pages/admin/Dashboard";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* USER ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/orders"
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />

      {/* ADMIN ROUTES */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <AdminOrders />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
