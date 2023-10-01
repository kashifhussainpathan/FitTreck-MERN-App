export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setUserInputs = (inputs) => {
  return {
    type: "SET_USER_INPUTS",
    payload: inputs,
  };
};

export const setToken = (token) => {
  return {
    type: "SET_TOKEN",
    payload: token,
  };
};
