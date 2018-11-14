const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOSTNAME,
    dialect: "postgres"
  }
);

connection
  .authenticate()
  .then(() => {
    console.log("postgres connection has been established successfully");
  })
  .catch(err => {
    console.error("Unable to connect to database: ", err);
  });

module.exports = connection;
