import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// admin only
router.get("/users", protect, admin, getAllUsers);

export default router;
