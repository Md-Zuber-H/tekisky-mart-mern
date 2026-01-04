import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoute from "./src/routes/authRoute.js";
import userRoute from "./src/routes/userRoute.js";
import adminRoutes from "./src/routes/adminRoute.js";
import productRoutes from "./src/routes/productRoute.js";






dotenv.config();
connectDB();


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);





// test route
app.get("/", (req, res) => {
  res.send("Tekisky Mart Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
