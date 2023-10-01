import axios from "axios";

const API_URL = "http://localhost:4000/exercises";

export const fetchExercises = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);

    if (response.status === 200) {
      const exercises = response.data.exercises;
      return exercises;
    } else {
      throw new Error("Failed to get exercises.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const sendExerciseToBackend = async (exerciseData) => {
  try {
    const response = await axios.post(API_URL, exerciseData);

    if (response.status === 201) {
      return response.data.exercise;
    } else {
      throw new Error("Failed to add exercise.");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteExercise = async (exerciseId) => {
  try {
    const response = await axios.delete(`${API_URL}/${exerciseId}`);

    if (response.status === 200) {
      const exercise = response.data.exercise;
      return exercise;
    } else {
      throw new Error("Faild to delete exercise.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const fetchExerciseOptions = async () => {
  try {
    const response = await axios.get(`${API_URL}/exercise-options`);
    if (response.status === 200) {
      return response.data.exerciseOptions;
    }
  } catch (error) {
    console.error("Error fetching exercise options:", error);
  }
};
