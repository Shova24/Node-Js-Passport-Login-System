import Users from "../models/userModel";
const bcrypt = require("bcrypt");

export const registerUser = async (req, res) => {
  // console.log("Post Register : ", req.body);
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    await Users.create(user);
    res.status(201).json(user);
    return;
  } catch (err) {
    res.json("registration failed ");
  }
  // console.log(users);
};

export const getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json("Not found");
  }
};

export const login = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } }, { raw: true });
    if (user === null) {
      res.status(200).json("User does not exist");
      return;
    }
    const is_exist = await bcrypt.compare(req.body.password, user.password);
    if (is_exist) {
      res.status(200).json(user);
    } else {
      res.status(200).json("password did not match");
    }
    // res.status(200).json("password did not match");
    return;
  } catch (err) {
    res.status(404).json("Not found");
  }
};
