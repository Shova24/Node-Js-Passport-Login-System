import Users from "../models/userModel";
const bcrypt = require("bcrypt");

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

    await Users.create(user);
    // users.push({
    //   id: Date.now().toString(),
    //   name: req.body.username,
    //   email: req.body.email,
    //   password: hashedPassword,
    // });

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
