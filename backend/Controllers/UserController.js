const express = require("express");
const User = require("../Models/User");

const login = async (req, res) => {
  const user = await User.find({ email: req.body.email });

  if (user.lenght > 0) {
    if (user[0].password == req.body.password) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } else {
    res.status(404).json({ message: "No User found" });
  }
};

const register = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "User Registerd" });
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

module.exports = {
  register,
  login,
};
