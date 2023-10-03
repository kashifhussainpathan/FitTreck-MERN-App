import { setFoods, setFoodsLoading } from "../actions/food.actions";
import { setGoals, setGoalsLoading } from "../actions/goal.actions";
import { fetchGoals } from "../services/goal.service";
import { fetchFoods } from "../services/food.service";
import {
  setExerciseOptions,
  setExercises,
  setExercisesLoading,
} from "../actions/exercise.actions";
import {
  fetchExerciseOptions,
  fetchExercises,
} from "../services/exercise.service";
import { fetchUser } from "../services/user.service";
import { setUser } from "../actions/user.actions";

export const getFoods = async (dispatch, userId) => {
  try {
    dispatch(setFoodsLoading(true));
    const foods = await fetchFoods(userId);
    dispatch(setFoods(foods));
    dispatch(setFoodsLoading(false));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getGoals = async (dispatch, userId) => {
  try {
    dispatch(setGoalsLoading(true));
    const goals = await fetchGoals(userId);
    dispatch(setGoals(goals));
    dispatch(setGoalsLoading(true));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getExercises = async (dispatch, userId) => {
  try {
    dispatch(setExercisesLoading(true));
    const exercises = await fetchExercises(userId);
    dispatch(setExercises(exercises));
    dispatch(setExercisesLoading(false));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getExercisesOptions = async (dispatch) => {
  try {
    const exerciseOptions = await fetchExerciseOptions();
    dispatch(setExerciseOptions(exerciseOptions));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const getUser = async (token, dispatch) => {
  try {
    const user = await fetchUser(token);
    dispatch(setUser(user));
  } catch (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    console.error(error.message);
  }
};
