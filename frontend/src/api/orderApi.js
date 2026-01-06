import api from "./axios";

export const fetchMyOrders = async () => {
  const { data } = await api.get("/orders/my");
  return data;
};
