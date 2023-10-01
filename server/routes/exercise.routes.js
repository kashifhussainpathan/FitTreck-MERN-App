const express = require("express");

const {
  addExercise,
  deleteExercise,
  getAllExercises,
  getExerciseOptions,
} = require("../controllers/exercise.controllers");

const exerciseRouter = express.Router();

exerciseRouter.post("/", async (request, response) => {
  try {
    const addedExercise = await addExercise(request.body);
    if (addedExercise) {
      response.status(201).json({
        message: "Exercise added successfully",
        exercise: addedExercise,
      });
    } else {
      response.status(404).json({
        error: "Exercise could not be saved",
      });
    }
  } catch (error) {
    response.status(500).json({ error: `${error.message}` });
  }
});

exerciseRouter.delete("/:exerciseId", async (request, response) => {
  try {
    const exerciseId = request.params.exerciseId;
    const deletedExercise = await deleteExercise(exerciseId);

    if (deletedExercise) {
      response.status(200).json({
        message: "Exercise deleted successfully",
        exercise: deletedExercise,
      });
    } else {
      response.status(404).json({
        error: `No exercise found with the id ${exerciseId}`,
      });
    }
  } catch (error) {
    response.status(500).json({ error: ` ${error.message}` });
  }
});

exerciseRouter.get("/exercise-options", async (request, response) => {
  try {
    const exerciseOptions = await getExerciseOptions();

    if (exerciseOptions) {
      response.status(200).json({
        message: "Exercise options retrived successfully",
        exerciseOptions,
      });
    } else {
      response.status(404).json({
        error: `No exercise options found`,
      });
    }
  } catch (error) {
    response.status(500).json({ error: ` ${error.message}` });
  }
});

exerciseRouter.get("/:userId", async (request, response) => {
  try {
    const userId = request.params.userId;
    const allExercises = await getAllExercises(userId);

    if (allExercises.length >= 0) {
      response.status(200).json({
        message: "Exercises retrieved successfully",
        exercises: allExercises,
      });
    } else {
      response.status(404).json({
        error: "No exercises found",
      });
    }
  } catch (error) {
    response.status(500).json({ error: ` ${error.message}` });
  }
});

module.exports = exerciseRouter;
