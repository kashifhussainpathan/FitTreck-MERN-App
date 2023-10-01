const express = require("express");

const {
  addFood,
  getAllFoods,
  deleteFood,
} = require("../controllers/food.controllers");

const foodRouter = express.Router();

foodRouter.post("/", async (request, response) => {
  try {
    const addedFood = await addFood(request.body);
    if (addedFood) {
      response.status(201).json({
        message: "Food added successfully",
        food: addedFood,
      });
    } else {
      response.status(404).json({
        error: "Food could not be saved",
      });
    }
  } catch (error) {
    response
      .status(500)
      .json({ error: `Failed to add food: ${error.message}` });
  }
});

foodRouter.get("/:userId", async (request, response) => {
  try {
    const userId = request.params.userId;
    const allFoods = await getAllFoods(userId);

    if (allFoods.length >= 0) {
      response.status(200).json({
        message: "Foods retrieved successfully",
        foods: allFoods,
      });
    } else {
      response.status(404).json({
        error: "No foods found",
      });
    }
  } catch (error) {
    response
      .status(500)
      .json({ error: `Failed to get all foods: ${error.message}` });
  }
});

foodRouter.delete("/:foodId", async (request, response) => {
  try {
    const foodId = request.params.foodId;
    const deletedFood = await deleteFood(foodId);

    if (deletedFood) {
      response.status(200).json({
        message: "Food deleted successfully",
        food: deletedFood,
      });
    } else {
      response.status(404).json({
        error: `No food found with the id ${foodId}`,
      });
    }
  } catch (error) {
    response
      .status(500)
      .json({ error: `Failed to delete food: ${error.message}` });
  }
});

module.exports = foodRouter;
