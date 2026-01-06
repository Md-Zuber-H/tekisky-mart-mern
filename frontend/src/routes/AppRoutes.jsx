import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import AdminOrders from "../pages/admin/Orders";
import PrivateRoute from "./PrivateRoute";
import Checkout from "../pages/Checkout";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route
                path="/admin/orders"
                element={
                    <AdminRoute>
                        <AdminOrders />
                    </AdminRoute>
                }
            />
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
        </Routes>
    );
};

export default AppRoutes;
