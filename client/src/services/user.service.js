import axios from "axios";
import { setLoginError } from "../actions/user.actions";

const API_URL = "https://fittreck-mern-app.onrender.com";

export const login = async (userInputs, dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userInputs);

    if (response.status === 200) {
      const data = response.data;
      return data;
    } else if (response.status === 401) {
      throw new Error("Invalid credentials");
    } else {
    }
  } catch (error) {
    throw error;
  }
};

export const signup = async (userDetails) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userDetails);

    if (response.status === 201) {
      const token = response.data.token;
      return token;
    } else {
      console.error("Oops, Failed to signup!");
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const fetchUser = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/user/profile`, {
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      const user = response.data.user;
      return user;
    } else {
      console.log(response.status);
    }
  } catch (error) {
    console.error(error.message);
  }
};
