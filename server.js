import app from "./app";
import sequelize from "./src/config/Database";
//Database Connect
sequelize
  .sync()
  // .authenticate()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// server start
app.listen(4000, () => {
  console.log("listening");
});
