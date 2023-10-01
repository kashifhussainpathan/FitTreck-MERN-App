const mongoose = require("mongoose");

const calorieBurnRates = {
  Running: 10,
  Swimming: 8,
  Cycling: 9,
  Yoga: 4,
  Weightlifting: 3,
  JumpingRope: 12,
  Aerobics: 7,
  Pilates: 5,
  Dancing: 6,
  Hiking: 7,
  Rowing: 8,
  Elliptical: 8,
  CrossFit: 9,
  RockClimbing: 7,
  MartialArts: 10,
  TaiChi: 3,
  Skiing: 9,
  Surfing: 6,
  JumpingJacks: 10,
  Burpees: 11,
  PushUps: 6,
  SitUps: 5,
  Plank: 3,
  Stretching: 2,
};

const exerciseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    enum: Object.keys(calorieBurnRates),
  },
  duration: {
    type: Number,
    required: true,
  },
  caloriesBurned: {
    type: Number,
    default: 0,
  },
});

exerciseSchema.pre("save", function (next) {
  const calorieBurnRate = calorieBurnRates[this.name] || 0;
  this.caloriesBurned = calorieBurnRate * this.duration;
  next();
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = { Exercise, calorieBurnRates };
