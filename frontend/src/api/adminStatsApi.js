import api from "./axios";

export const getAdminStats = async () => {
  const [productsRes, ordersRes, usersRes] = await Promise.all([
    api.get("/products"),
    api.get("/admin/orders"),
    api.get("/admin/users"),
  ]);

  const products = productsRes.data;
  const orders = ordersRes.data;
  const users = usersRes.data;

  const totalRevenue = orders.reduce(
    (sum, order) => sum + (order.totalAmount || 0),
    0
  );

  return {
    totalProducts: products.length,
    totalOrders: orders.length,
    totalUsers: users.length,
    totalRevenue,
  };
};