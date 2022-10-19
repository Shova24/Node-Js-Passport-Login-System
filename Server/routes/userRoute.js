import Router from "express";
import { registerUser, getUser, login } from "../controllers/userController";
const router = Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/get-user", getUser);

export default router;
