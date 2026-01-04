import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoute from "./src/routes/authRoute.js";



dotenv.config();
connectDB();


const app = express();

// middlewares
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);


// test route
app.get("/", (req, res) => {
  res.send("Tekisky Mart Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
