const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");

const app = express();
const users = [];

//middlewares
app.use(express.json());
app.use(cors());

//test
const obj = ["abc", "def"];
app.get("/api", (req, res) => {
  // res.send("working");
  res.json(obj);
});
app.get("/", (req, res) => {
  // res.send("working");
  res.render("index.ejs", { user: "shova" });
});

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
  } catch {
    res.status(404).json("registration failed ");
  }

  // console.log(users);
  console.log("====================================");
});

app.listen(4000, () => {
  console.log("listening");
});
