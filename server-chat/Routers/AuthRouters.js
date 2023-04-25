const express = require("express");
// const router = express.Router();
const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
// const { restart } = require('nodemon')

const handleError = (error) => {
  const errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    error: "",
  };
  if (error.code === 11000) {
    errors["error"] = "User is Already Exist";
    return errors;
  }
  if (error.message === "Incorrect Email") {
    errors["email"] = "Incorrect Email";
  }
  if (error.message === "Incorrect Password") {
    errors["password"] = "Incorrect Password";
  }
  if (error.message.includes("User validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    console.log(errors);
  }
  return errors;
  // console.log('error code is :',error)
};
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: maxAge,
  });
  return token;
};
const signup = async (req, res) => {
  // const {firstName,lastName,email,phone,password} = req.body
  try {
    const savedUser = await User.create({
      ...req.body,
    });
    const token = createToken(savedUser._id);
    // console.log('token is',token)
    res.status(200).json({ savedUser, token });
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json(errors);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loginData = await User.login(email, password);
    const token = createToken(loginData._id);
    res.status(200).json({ loginData, token });
  } catch (err) {
    const errors = handleError(err);
    res.status(400).json({ errors });
  }
};

module.exports = { login, signup };
