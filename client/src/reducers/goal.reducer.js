const initialState = {
  goals: [],
  goalData: {
    name: "",
    status: "",
    targetDate: "",
    description: "",
    targetCalories: "",
  },
  isGoalsLoading: false,
  showGoalModal: false,
};

const goalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_GOALS":
      return {
        ...state,
        goals: payload,
      };

    case "SET_GOAL-DATA":
      return {
        ...state,
        goalData: payload,
      };

    case "SET_GOALS_LOADING":
      return {
        ...state,
        isGoalsLoading: payload,
      };

    case "SET_SHOW_GOAL_MODAL":
      return {
        ...state,
        showGoalModal: payload,
      };

    default:
      return state;
  }
};

export default goalReducer;
