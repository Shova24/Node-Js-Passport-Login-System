const express = require("express");
const app = express();

//let the server know that you are using ejs
app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { user: "shova" });
});
app.listen(3000);
