import Router from "express";
import { registerUser, getUser } from "../controllers/userController";
const router = Router();

router.post("/register", registerUser);
router.get("/get-user", getUser);

export default router;
