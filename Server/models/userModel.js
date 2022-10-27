import { DataTypes } from "sequelize";

import sequelize from "../config/Database";

const { STRING } = DataTypes;

const Users = sequelize.define(
  "Registered_Users",
  {
    username: {
      type: STRING,
      allowNull: true,
    },
    email: {
      type: STRING,
      allowNull: true,
    },
    password: {
      type: STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    schema: "shova",
  }
);

export default Users;
