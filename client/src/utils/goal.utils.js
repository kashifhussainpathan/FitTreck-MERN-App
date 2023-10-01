import { setShowGoalModal } from "../actions/goal.actions";
import { deleteGoal } from "../services/goal.service";
import { getGoals } from "./app.utils";

export const handleDeleteGoalClick = async (goalId, dispatch, user) => {
  try {
    const goal = await deleteGoal(goalId);
    if (goal) {
      getGoals(dispatch, user._id);
    }
  } catch (error) {
    alert(`${error}`);
  }
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const handleAddGoalClick = (dispatch) => {
  dispatch(setShowGoalModal(true));
};
export const handleCloseGoalModal = (dispatch) => {
  dispatch(setShowGoalModal(false));
};
