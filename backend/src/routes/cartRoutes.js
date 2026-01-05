import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cartController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, addToCart);          // add / update
router.get("/", protect, getCart);             // view cart
router.delete("/:productId", protect, removeFromCart);

export default router;
