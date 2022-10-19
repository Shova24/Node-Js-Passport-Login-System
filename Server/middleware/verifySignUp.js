import Users from "../models/userModel";

export const checkDuplicateUsernameOrEmail = (req, res, next) => {
  console.log(req.body);
  const user = Users.findOne({ where: { username: req.body.username } });
  if (user) {
    res.status(400).send({ message: "Failed! Username is already in use!" });
    return;
  }
  const email = Users.findOne({ where: { email: req.body.email } });
  if (email) {
    res.status(400).send({
      message: "Failed! Email is already in use!",
    });
    return;
  }
  next();
};
