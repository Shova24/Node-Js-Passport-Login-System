import express from "express";
import userRouter from "./src/routes/userRoute";
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

//error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

export default app;
