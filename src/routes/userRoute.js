import Router from "express";
import { registerUser, getUser, login } from "../controllers/userController";
const router = Router();

const jwt = require("jsonwebtoken");

const AuthorizedUser = async (req, res, next) => {
  //getting authorization header from frontend
  const authHeader = req.get("Authorization");
  // const authHeader = req.headers["authorization"];

  if (!authHeader) {
    const error = new Error("Not authenticated.");
    error.statusCode = 401;
    return next(error);
  }

  //getting the token from header
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secret");
  } catch (error) {
    console.log(error);
    if (error.message === "jwt expired") {
      error.message = "Session Expired";
    }
    error.statusCode = 500;
    return next(error);
  }
  if (!decodedToken) {
    const error = new Error("Not authenticated");
    error.statusCode = 401;
    return next(error);
  }
  // Grant access to protect route
  req.user = decodedToken;
  req.token = token;
  return next();
};

// router.use(AuthorizedUser);

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   console.log("====================================");
//   console.log("Auth Header : ", authHeader);
//   console.log("====================================");
//   const token = authHeader && authHeader.split(" ")[1];
//   if (token == null) return res.sendStatus(401);
//   jwt.verify(token, "secret", (err, user) => {
//     if (err) return res.sendStatus(403);
//     req.user = user;
//     next();
//   });
// };

router.post("/register", registerUser);
router.post("/login", login);
router.get("/get-user", AuthorizedUser, getUser);
// router.get("/get-user", authenticateToken, getUser);

export default router;
