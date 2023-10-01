const Food = require("../models/food");

const addFood = async (newFood) => {
  try {
    const food = new Food(newFood);

    if (food) {
      const addedFood = await food.save();
      return addedFood;
    } else {
      throw new Error("Failed to create food!");
    }
  } catch (error) {
    throw new Error(`Failed to add food: ${error.message}`);
  }
};

const getAllFoods = async (user) => {
  try {
    const allFoods = await Food.find({ user });

    if (allFoods.length > 0) {
      return allFoods;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(`Failed to get all foods: ${error.message}`);
  }
};

const deleteFood = async (id) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(id);

    if (deletedFood) {
      return deletedFood;
    } else {
      throw new Error("No food found with that id!");
    }
  } catch (error) {
    throw new Error(`Failed to delete food: ${error.message}`);
  }
};

module.exports = { addFood, getAllFoods, deleteFood };

//  const apple = new Food({
//   name: "Apple",
//   calories: 52,
//   protein: 0.3,
//   carbohydrates: 13.8,
//   fat: 0.2,
// });
