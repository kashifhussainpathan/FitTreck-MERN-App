import axios from "axios";

const API_URL = "http://localhost:4000/foods";

export const fetchFoods = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);

    if (response.status === 200) {
      const foods = response.data.foods;
      return foods;
    } else {
      throw new Error("Faild to get foods.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const sendFoodToBackend = async (foodData) => {
  try {
    const response = await axios.post(API_URL, foodData);

    if (response.status === 201) {
      return response.data.food;
    } else {
      throw new Error("Failed to add food.");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteFood = async (foodId) => {
  try {
    const response = await axios.delete(`${API_URL}/${foodId}`);

    console.log(response);
    if (response.status === 200) {
      const food = response.data.food;
      return food;
    } else {
      throw new Error("Faild to delete food.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
