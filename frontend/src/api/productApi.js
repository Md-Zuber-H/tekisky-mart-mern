import api from "./axios";

/* ================== USER ================== */

// GET ALL PRODUCTS
export const getAllProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};


/* ================== ADMIN ================== */

// CREATE PRODUCT (with image upload)
export const createProduct = async (formData) => {
  const { data } = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// UPDATE PRODUCT (ADMIN)
export const updateProduct = async (id, formData) => {
  const { data } = await api.put(`/products/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

// DELETE PRODUCT (ADMIN)
export const deleteProduct = async (id) => {
  const { data } = await api.delete(`/products/${id}`);
  return data;
};