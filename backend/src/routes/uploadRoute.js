import express from "express";
import upload from "../middlewares/uploadMiddleware.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  (req, res) => {
    res.status(200).json({
      imageUrl: req.file.path,
    });
  }
);

export default router;
