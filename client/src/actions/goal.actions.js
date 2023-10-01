export const setGoals = (goals) => {
  return {
    type: "SET_GOALS",
    payload: goals,
  };
};

export const setGoalData = (goal) => {
  return {
    type: "SET_GOAL-DATA",
    payload: goal,
  };
};

export const setGoalsLoading = (loading) => {
  return {
    type: "SET_GOALS_LOADING",
    payload: loading,
  };
};

export const setShowGoalModal = (show) => {
  return {
    type: "SET_SHOW_GOAL_MODAL",
    payload: show,
  };
};
