import { createContext, useContext, useState } from "react";
import { fetchMyOrders } from "../api/orderApi";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadMyOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchMyOrders();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrderContext.Provider value={{ orders, loading, loadMyOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
