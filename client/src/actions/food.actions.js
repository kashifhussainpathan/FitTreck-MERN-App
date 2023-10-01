export const setFoods = (foods) => {
  return {
    type: "SET_FOODS",
    payload: foods,
  };
};

export const setFoodData = (food) => {
  return {
    type: "SET_FOOD-DATA",
    payload: food,
  };
};

export const setFoodsLoading = (loading) => {
  return {
    type: "SET_FOODS_LOADING",
    payload: loading,
  };
};

export const setShowFoodModal = (show) => {
  return {
    type: "SET_SHOW_FOOD_MODAL",
    payload: show,
  };
};
