import api from "./axios";

// USER ORDERS
export const fetchMyOrders = () => api.get("/orders/my");

export const fetchOrderById = (id) =>
  api.get(`/orders/${id}`);


// ================== ADMIN ORDERS ==================

// GET ALL ORDERS (ADMIN)
export const getAllOrdersAdmin = () =>
  api.get("/admin/orders");

// UPDATE ORDER STATUS (ADMIN)
export const updateOrderStatusAdmin = (orderId, status) =>
  api.put(`/admin/orders/${orderId}`, { status });