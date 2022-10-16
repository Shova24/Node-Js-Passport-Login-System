import express from "express";
import router from "./routes/Router";
const cors = require("cors");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.get("/login", (req, res) => {
  res.status(200).json("login get");
});

app.post("/login", (req, res) => {
  console.log("====================================");
  console.log("request body(LOGIN) : ", req.body);
  console.log("====================================");
  res.status(200).json("login post");
});

app.get("/register", (req, res) => {
  console.log("Register Get");
  res.status(200).json("register get");
});

app.post("/register", async (req, res) => {
  console.log("Post Register : ", req.body);
  const hashedPassword = await bcrypt.hash("abcd", 10);
  // console.log("[hashed Pass : ", hashedPassword);
  try {
    users.push({
      id: Date.now().toString(),
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("registration failed ");
  }

  // console.log(users);
  console.log("====================================");
});

app.use("/api", router);

//test
const obj = ["abc", "def"];
app.get("/api", (req, res) => {
  res.json(obj);
});

export default app;
