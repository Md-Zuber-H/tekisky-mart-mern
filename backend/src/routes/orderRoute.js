import express from "express";
import {
  createOrder,
  getMyOrders,
  getAllOrders,
  markOrderAsPaid,
  markOrderAsDelivered,
  getOrderById,
} from "../controllers/orderController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/myorders", protect, getMyOrders);
router.get("/", protect, admin, getAllOrders);

// single order (user/admin)
router.get("/:id", protect, getOrderById);

// admin actions
router.put("/:id/pay", protect, admin, markOrderAsPaid);
router.put("/:id/deliver", protect, admin, markOrderAsDelivered);

export default router;
