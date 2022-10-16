const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db3g3vl8clve4u", "cvxnkgyrjpyabh", "bcca1a6ea9c38d7a81f7fe7b2d01cce2f728567f63e226ea9aff9415121091be", {
  host: "ec2-44-199-52-133.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  // logging: true,
});

export default sequelize;
