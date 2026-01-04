import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// public
router.get("/", getProducts);
router.get("/:id", getProductById);

// admin
router.post("/", protect, admin, createProduct);

export default router;
