import { getExercises } from "./app.utils";
import { deleteExercise } from "../services/exercise.service";
import { setShowExerciseModal } from "../actions/exercise.actions";

export const handleDeleteExerciseClick = async (exerciseId, dispatch, user) => {
  try {
    const exercise = await deleteExercise(exerciseId);
    if (exercise) {
      getExercises(dispatch, user._id);
    }
  } catch (error) {
    alert(`${error}`);
  }
};

export const handleAddExerciseClick = (dispatch) => {
  dispatch(setShowExerciseModal(true));
};
export const handleCloseExerciseModal = (dispatch) => {
  dispatch(setShowExerciseModal(false));
};
