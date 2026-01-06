import { createContext, useContext, useEffect, useState } from "react";
import {
  addToCartApi,
  getCartApi,
  updateCartItemApi,
  removeCartItemApi,
} from "../api/cartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const { data } = await getCartApi();
      setCart(data);
    } catch (err) {
      setCart(null);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId, qty = 1) => {
    await addToCartApi(productId, qty);
    fetchCart();
  };

  const updateQty = async (productId, qty) => {
    await updateCartItemApi(productId, qty);
    fetchCart();
  };

  const removeItem = async (productId) => {
    await removeCartItemApi(productId);
    fetchCart();
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, loading, addToCart, updateQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
