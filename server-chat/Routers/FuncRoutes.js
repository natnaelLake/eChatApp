const express = require("express");
const User = require("../Model/UserModel");

const search = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { firstName: { $regex: req.query.search, $options: "i" } },
          //   { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  try {
    const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
  } catch (error) {
    console.log(error)
  }
};

module.exports = { search };