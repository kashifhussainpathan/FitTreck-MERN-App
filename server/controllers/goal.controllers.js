const Goal = require("../models/goal");

const addGoal = async (newGoal) => {
  try {
    const goal = new Goal(newGoal);

    if (goal) {
      const addedGoal = await goal.save();
      return addedGoal;
    } else {
      throw new Error("Failed to create goal!");
    }
  } catch (error) {
    throw new Error(`Failed to add goal: ${error.message}`);
  }
};

const getAllGoals = async (user) => {
  try {
    const allGoals = await Goal.find({ user });

    if (allGoals.length > 0) {
      return allGoals;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(`Failed to get all : goals${error.message}`);
  }
};

const deleteGoal = async (id) => {
  try {
    const deletedGoal = await Goal.findByIdAndDelete(id);

    if (deletedGoal) {
      return deletedGoal;
    } else {
      throw new Error("No goal found with that id!");
    }
  } catch (error) {
    throw new Error(`Failed to delete goal: ${error.message}`);
  }
};

module.exports = { addGoal, getAllGoals, deleteGoal };
