if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} //Install environment env

const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./routes");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require("morgan")("dev"));

app.use("/", router);

app.use(errorHandler);

module.exports = app;
