const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");

const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.get("/", (req, res) => {
  // res.send("working");
  res.render("index.ejs", { user: "shova" });
});
const obj = ["abc", "def"];
app.get("/api", (req, res) => {
  // res.send("working");
  res.json(obj);
});
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {
  console.log("====================================");
  console.log("request body(LOGIN) : ", req.body);
  console.log("====================================");
});
app.get("/register", (req, res) => {
  console.log("Register Get");
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  console.log("Post Register");
  const hashedPassword = await bcrypt.hash("abcd", 10);
  // console.log("[hashed Pass : ", hashedPassword);
  try {
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }

  console.log(users);
  console.log("====================================");
});

app.listen(4000, () => {
  console.log("listening");
});
