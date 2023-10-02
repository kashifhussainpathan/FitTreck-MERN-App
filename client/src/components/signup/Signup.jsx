import React from "react";

import { signup } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserInputs } from "../../actions/user.actions";
import { useNavigate } from "react-router-dom";

function Singup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.userState.userInputs);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInputs({ ...userInputs, [name]: value }));
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    try {
      const token = await signup(userInputs);
      localStorage.setItem("token", JSON.stringify(token));
      dispatch(setToken(token));
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignupClick}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={userInputs.email}
            placeholder="mail@gmail.com"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={userInputs.password}
            placeholder="password"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={userInputs.username}
            placeholder="username"
            onChange={handleUserInputsChange}
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Singup;
