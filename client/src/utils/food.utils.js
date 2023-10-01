import { setFoods, setShowFoodModal } from "../actions/food.actions";
import { deleteFood, fetchFoods } from "../services/food.service";

export const getFoods = async (dispatch, userId) => {
  try {
    const foods = await fetchFoods(userId);
    dispatch(setFoods(foods));
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const handleDeleteFoodClick = async (foodId, dispatch, user) => {
  try {
    const food = await deleteFood(foodId);
    if (food) {
      getFoods(dispatch, user._id);
    }
  } catch (error) {
    alert(`${error}`);
  }
};

export const handleAddFoodClick = (dispatch) => {
  dispatch(setShowFoodModal(true));
};

export const handleCloseFoodModal = (dispatch) => {
  dispatch(setShowFoodModal(false));
};
