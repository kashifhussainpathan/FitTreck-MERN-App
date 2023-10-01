const initialState = {
  exercises: [],
  exerciseData: { name: "", duration: "" },
  exerciseOptions: [],
  isExercisesLoading: false,
  showExerciseModal: false,
};

const exerciseReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_EXERCISES":
      return {
        ...state,
        exercises: payload,
      };

    case "SET_EXERCISE-DATA":
      return {
        ...state,
        exerciseData: payload,
      };

    case "SET_EXERCISE-OPTIONS":
      return {
        ...state,
        exerciseOptions: payload,
      };

    case "SET_EXERCISES_LOADING":
      return {
        ...state,
        isExercisesLoading: payload,
      };

    case "SET_SHOW_EXERCISE_MODAL":
      return {
        ...state,
        showExerciseModal: payload,
      };

    default:
      return state;
  }
};

export default exerciseReducer;
