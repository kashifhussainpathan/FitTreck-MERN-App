const initialState = {
  user: {},
  token: "",
  userInputs: { email: "", password: "", username: "" },
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload,
      };

    case "SET_USER_INPUTS":
      return {
        ...state,
        userInputs: payload,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
