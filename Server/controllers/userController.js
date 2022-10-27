import Users from "../models/userModel";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const registerUser = async (req, res) => {
  console.log("Post Register : ", req.body);

  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      username: username,
      email: email,
      password: hashedPassword,
    };
    console.log(user);
    console.log("====================================");
    await Users.create(user);

    res.status(201).json("created successfully");
    return;
  } catch (err) {
    console.log(err);
    res.json("registration failed ", err);
    return;
  }
  // console.log(users);
};

export const getUser = async (req, res) => {
  try {
    const users = await Users.findAll({ raw: true });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(404).json("Not found");
  }
};

export const login = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } }, { raw: true });
    if (!user) {
      // const error = new Error("User does not exist");
      // res.status(200).json(error.message);
      res.status(200).json("usen not found");
      return;
    }
    const is_exist = await bcrypt.compare(req.body.password, user.password);
    if (is_exist) {
      const accessToken = jwt.sign(user, "SECRET");
      console.log("====================================");
      console.log("accessToken: " + accessToken);
      console.log("====================================");
      res.status(200).json(user);
    } else {
      // const error = new Error("Password did not matched");
      res.status(200).json("error.message");
      // res.status(200).json(error.message);
    }
    return;
  } catch (err) {
    res.status(404).json("Not found");
  }
};
