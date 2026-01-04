import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// public
router.get("/", getProducts);
router.get("/:id", getProductById);

// admin
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

export default router;
