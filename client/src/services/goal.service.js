import axios from "axios";

const API_URL = "https://fittreck-mern-app.onrender.com/goals";

export const fetchGoals = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`);

    if (response.status === 200) {
      const goals = response.data.goals;
      return goals;
    } else {
      throw new Error("Faild to get goals.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const sendGoalToBackend = async (goalData) => {
  try {
    const response = await axios.post(API_URL, goalData);

    if (response.status === 201) {
      return response.data.goal;
    } else {
      throw new Error("Failed to add goal.");
    }
  } catch (error) {
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await axios.delete(`${API_URL}/${goalId}`);

    if (response.status === 200) {
      const goal = response.data.goal;
      return goal;
    } else {
      throw new Error("Faild to delete goal.");
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
