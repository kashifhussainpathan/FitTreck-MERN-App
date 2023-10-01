export const setExercises = (exercises) => {
  return {
    type: "SET_EXERCISES",
    payload: exercises,
  };
};

export const setExerciseData = (exercise) => {
  return {
    type: "SET_EXERCISE-DATA",
    payload: exercise,
  };
};

export const setExerciseOptions = (options) => {
  return {
    type: "SET_EXERCISE-OPTIONS",
    payload: options,
  };
};

export const setExercisesLoading = (loading) => {
  return {
    type: "SET_EXERCISES_LOADING",
    payload: loading,
  };
};

export const setShowExerciseModal = (show) => {
  return {
    type: "SET_SHOW_EXERCISE_MODAL",
    payload: show,
  };
};
