import React from "react";
import { login } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  setLoginError,
  setUser,
  setUserInputs,
} from "../../actions/user.actions";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.userState.userInputs);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInputs({ ...userInputs, [name]: value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const data = await login(userInputs, dispatch);
      dispatch(setUser(data?.user));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/");
    } catch (error) {
      dispatch(setLoginError("Invalid credentials"));
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginClick}>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            value={userInputs.email}
            placeholder="user@gmail.com"
            onChange={handleUserInputsChange}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={userInputs.password}
            placeholder="password"
            onChange={handleUserInputsChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
