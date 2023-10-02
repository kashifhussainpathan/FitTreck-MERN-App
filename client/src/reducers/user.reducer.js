const initialState = {
  user: {},
  token: "",
  userInputs: { email: "", password: "", username: "" },
  isloggedIn: false,
  loginError: "",
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

    case "SET_IS-LOGGED-IN":
      return {
        isloggedIn: payload,
      };

    case "SHOW_LOGIN_ERROR":
      return {
        ...state,
        loginError: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
