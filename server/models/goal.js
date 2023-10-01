const mongoose = require("mongoose");

goalSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  targetDate: {
    type: Date,
    required: true,
  },
  targetCalories: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Progress", "Achieved", "Abandoned"],
    default: "In Progress",
  },
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;

// {
//   name: "Lose Weight",
//   description: "Achieve a healthy weight through diet and exercise",
//   targetDate: new Date("2023-12-31"),
//   targetCalories: 1500,
//   status: "In Progress",
// }
