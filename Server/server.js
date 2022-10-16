import app from "./app";
import sequelize from "./config/Database";
//Database Connect
sequelize
  .sync()
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
