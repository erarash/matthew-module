const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize("reviews", "postgres", "postgres", {
  host: process.env.DBHOSTNAME,
  dialect: "postgres"
});

connection
  .authenticate()
  .then(() => {
    console.log("postgres connection has been established successfully");
  })
  .catch(err => {
    console.error("Unable to connect to database: ", err);
  });

module.exports = connection;
