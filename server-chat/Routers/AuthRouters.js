const express = require("express");

const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");

const handleError = (error) => {
  const errors = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    error: "",
  };
  if (error.message === "Incorrect Email") {
    errors["email"] = "You are not registered";
  }
  if (error.message === "Incorrect Password") {
    errors["password"] = "Incorrect Password";
  }
  if (error.message === "Enter Email") {
    errors["email"] = "Fill Email Field";
  }
  if (error.message === "Enter Password") {
    errors["password"] = "Fill Password Field";
  }
  if (error.code === 11000) {
    errors.error = "User is Already Registered";
    return errors;
  }
  if (error.message.includes("User validation failed")) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: maxAge,
  });
  return token;
};
const signup = async (req, res) => {
  try {
    const user = await User.create({
      ...req.body,
    });
    console.log(user);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    const errors = handleError(error);
    res.status(401).json(errors);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    const errors = handleError(err);
    console.log("error code is :", errors);
    res.status(400).json(errors);
  }
};

module.exports = { login, signup };