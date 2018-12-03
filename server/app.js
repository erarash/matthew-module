require("newrelic");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const router = require("./routes");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/../client/dist")));

app.use("/api", router);

module.exports = app;
