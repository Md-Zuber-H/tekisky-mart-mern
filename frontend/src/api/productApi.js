import axios from "./axios";

export const getAllProducts = async () => {
  const res = await axios.get("/products");
  return res.data;
};
