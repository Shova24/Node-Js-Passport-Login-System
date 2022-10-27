import express from "express";
import router from "./routes/Router";
import userRouter from "./routes/userRoute";
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);

export default app;
