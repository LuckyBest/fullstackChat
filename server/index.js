import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { router } from "./router/index.js";
import { errorMiddleware } from "./middleware/error-middleware.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));
  } catch (e) {
    throw e;
  }
};

start();
