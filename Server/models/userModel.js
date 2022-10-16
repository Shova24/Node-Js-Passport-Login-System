import { DataTypes } from "sequelize";

import sequelize from "../config/Database";

const { STRING } = DataTypes;

const Users = sequelize.define(
  "Registered_Users",
  {
    username: STRING,
    email: STRING,
    password: STRING,
  },
  {
    timestamps: false,
    schema: "shova",
  }
);

export default Users;
