const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
// import { isEmail } from "validator";
const validator = require("validator");

const users = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      max: [32, "Max Length is 32"],
      validate: {
        validator: validator.isEmail,
        message: "Enter Valid Email",
      },
    },
    phone: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
      validate: {
        validator: function (v) {
          return /\d{3}\d{3}\d{4}/.test(v);
        },
        message: "Enter Valid Phone Number",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: [8, "Min Length is 8"],
    },
    pic: {
      type: String,
      default: "/wel/wel",
    },
  },
  { timestamps: true }
);
users.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(this.password, salt);
  this.password = password;
  next();
});

users.statics.login = async function (email, password, next) {
  const user = await this.findOne({ email });
  if (!email) {
    throw Error("Enter Email");
  }
  if (!password) {
    throw Error("Enter Password");
  }
  if (user) {
    const userPass = await bcrypt.compare(password, user.password);
    if (userPass) {
      return user;
    } else {
      throw Error("Incorrect Password");
    }
  } else {
    throw Error("Incorrect Email");
  }
};
module.exports = mongoose.model("User", users);
