import Router from "express";
import { registerUser, getUser, login } from "../controllers/userController";
const router = Router();
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

router.post("/register", registerUser);
router.post("/login", login);
router.get("/get-user", authenticateToken, getUser);

export default router;
