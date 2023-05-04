var createError = require("http-errors");
require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const AuthConrollers = require("./Controllers/AuthConrollers");
// const funcControllers = require("./Controllers/FuncConrollers");
const funcControllers = require('./Controllers/FuncControllers')
const chatControllers = require('./Controllers/ChatControllers')


var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const cors = require("cors");

var app = express();
mongoose.connect(process.env.MONGOURI).then(() => {
  console.log("Database is connected.");
}).catch(err=>{
  console.log('errorororoorr ')
  console.log(err)
})
app.use(
  cors({
    origin: "*",
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use(AuthConrollers);
app.use(funcControllers)
app.use(chatControllers)

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
