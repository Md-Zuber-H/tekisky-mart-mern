import api from "./axios";

// ADD TO CART
export const addToCartApi = (productId, quantity = 1) =>
  api.post("/cart", { productId, quantity });

// GET CART
export const getCartApi = () =>
  api.get("/cart");

// UPDATE QTY
export const updateCartItemApi = (productId, quantity) =>
  api.put("/cart", { productId, quantity });

// REMOVE ITEM
export const removeCartItemApi = (productId) =>
  api.delete(`/cart/${productId}`);