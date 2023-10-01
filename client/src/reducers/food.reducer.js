const initialState = {
  foods: [],
  foodData: { name: "", fat: "", protein: "", calories: "", carbohydrates: "" },
  isFoodsLoading: false,
  showFoodModal: false,
};

const foodReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_FOODS":
      return {
        ...state,
        foods: payload,
      };

    case "SET_FOOD-DATA":
      return {
        ...state,
        foodData: payload,
      };

    case "SET_FOODS_LOADING":
      return {
        ...state,
        isFoodsLoading: payload,
      };

    case "SET_SHOW_FOOD_MODAL":
      return {
        ...state,
        showFoodModal: payload,
      };

    default:
      return state;
  }
};

export default foodReducer;
