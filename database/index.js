//POSTGRES////////////////////////////////////////////////////////////////////
const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize("reviews", "postgres", "password", {
  host: process.env.HOSTNAME,
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
////////////////////////////////////////////////////////////////////////////

// let mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/mattrev");

// let db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("connected to mongodb");
// });

// var reviewSchema = new mongoose.Schema({
//   user: String,
//   prodRating: Number,
//   yesRating: Number,
//   noRating: Number,
//   date: { type: date },
//   body: String,
//   verified: Boolean,
//   recommend: Boolean,
//   size: Number,
//   width: Number,
//   comfort: Number,
//   quality: Number,
//   response: String,
//   prodId: Number,
//   header: String
// });

// var review = mongoose.model("review", reviewSchema);

// module.exports = { review };
