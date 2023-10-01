const express = require("express");
const bcrypt = require("bcrypt");
const authRouter = express.Router();
const secret = process.env.SECRET;
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");
const authVerify = require("../utils/utils.js");
const { signup, login } = require("../controllers/auth.controllers.js");

// user signup API
authRouter.post("/signup", async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "Email already taken" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registeredUser = await signup({
      email,
      password: hashedPassword,
      username,
    });

    const token = jwt.sign({ email }, secret, { expiresIn: "24h" });

    res
      .status(201)
      .json({ message: "Registration successful", registeredUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login(email);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, secret, { expiresIn: "24h" });

    res.json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

authRouter.get("/user/profile", authVerify, async (req, res) => {
  try {
    const user = req.user;
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = authRouter;
