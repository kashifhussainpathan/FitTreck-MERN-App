const express = require("express");
const {
  deleteGoal,
  getAllGoals,
  addGoal,
} = require("../controllers/goal.controllers");

const goalsRouter = express.Router();

goalsRouter.post("/", async (request, response) => {
  try {
    const addedGoal = await addGoal(request.body);
    if (addedGoal) {
      response.status(201).json({
        message: "Goal added successfully",
        goal: addedGoal,
      });
    } else {
      response.status(404).json({
        error: "Goal could not be saved",
      });
    }
  } catch (error) {
    response.status(500).json({ error: `${error.message}` });
  }
});

goalsRouter.get("/:userId", async (request, response) => {
  try {
    const userId = request.params.userId;
    const allGoals = await getAllGoals(userId);

    if (allGoals.length >= 0) {
      response.status(200).json({
        message: "Goals retrieved successfully",
        goals: allGoals,
      });
    } else {
      response.status(404).json({
        error: "No goals found",
      });
    }
  } catch (error) {
    response.status(500).json({ error: `${error.message}` });
  }
});

goalsRouter.delete("/:goalId", async (request, response) => {
  try {
    const goalId = request.params.goalId;
    const deletedGoal = await deleteGoal(goalId);

    if (deletedGoal) {
      response.status(200).json({
        message: "Goal deleted successfully",
        goal: deletedGoal,
      });
    } else {
      response.status(404).json({
        error: `No goal found with the id ${goalId}`,
      });
    }
  } catch (error) {
    response.status(500).json({ error: `${error.message}` });
  }
});

module.exports = goalsRouter;
