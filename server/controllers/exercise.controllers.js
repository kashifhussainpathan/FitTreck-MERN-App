const { Exercise, calorieBurnRates } = require("../models/exercise");

const addExercise = async (newExercise) => {
  try {
    const exercise = new Exercise(newExercise);

    if (exercise) {
      await exercise.save();

      const responseExercise = {
        userId: exercise.user,
        _id: exercise._id,
        name: exercise.name,
        duration: exercise.duration,
        caloriesBurned: exercise.caloriesBurned,
      };

      return responseExercise;
    } else {
      throw new Error("Failed to create exercise!");
    }
  } catch (error) {
    throw new Error(`Failed to add exercise: ${error.message}`);
  }
};

const getAllExercises = async (user) => {
  try {
    const allExercises = await Exercise.find({ user });
    if (allExercises.length > 0) {
      return allExercises;
    } else {
      return [];
    }
  } catch (error) {
    throw new Error(`Failed to get all Exercises: ${error.message}`);
  }
};

const deleteExercise = async (id) => {
  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (deletedExercise) {
      return deletedExercise;
    } else {
      throw new Error("No exercise found with that id!");
    }
  } catch (error) {
    throw new Error(`Failed to delete exercise: ${error.message}`);
  }
};

const getExerciseOptions = async () => {
  try {
    const enumValues = Object.keys(calorieBurnRates);
    return enumValues;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

module.exports = {
  addExercise,
  getAllExercises,
  deleteExercise,
  getExerciseOptions,
};
