import { DataTypes } from "sequelize";

import sequelize from "../config/Database";

const { STRING } = DataTypes;

const Users = sequelize.define(
  "Registered_Users",
  {
    username: {
      type: STRING,
      allowNull: true,
      // length should be between 3 to 10
      validate: {
        len: [3, 20],
      },
    },
    email: {
      type: STRING,
      allowNull: true,
      // valid email
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: STRING,
      allowNull: true,
      //must have one lowercase letter, one uppercase letter, one numeric character, length should be between 3 to 6
      // validate: {
      // len: [3, 6],
      //   isLowercase: true,
      //   isUppercase: true,
      //   isInt: true,
      // },
    },
  },
  {
    timestamps: false,
    schema: "shova",
  }
);

export default Users;
