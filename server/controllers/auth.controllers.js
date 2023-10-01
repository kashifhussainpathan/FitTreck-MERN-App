const User = require("../models/user.js");

async function signup(userDetails) {
  try {
    const user = new User(userDetails);
    const newUser = await user.save();
    console.log("New user created:", newUser);
    return newUser;
  } catch (err) {
    throw err;
  }
}

async function login(email) {
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      console.log("Logged in user:", foundUser);
      return foundUser;
    } else {
      console.error("User not found!");
    }
  } catch (err) {
    throw err;
  }
}

async function getUser(email) {
  try {
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      console.log("Logged in user:", foundUser);
      return foundUser;
    } else {
      throw new Error("User not found!");
    }
  } catch (err) {
    throw err;
  }
}

module.exports = {
  getUser,
  signup,
  login,
};
