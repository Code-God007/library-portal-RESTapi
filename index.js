const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/database");
const morgan = require("morgan");
const booksRouter = require("./routes/books");

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db = mongoose.connection;

// Check connection
db.once("open", () => console.log("Connected to MongoDB..."));

// Check for db errors
db.on("error", err => console.log(err));

const app = express();

// Middleware
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use(morgan("dev")); // logger for terminal
app.use(bodyParser.json());

// Routes
app.use("/", booksRouter);

app.listen(4000, () => console.log("Server Started on port 4000..."));
