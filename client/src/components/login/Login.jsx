import React from "react";
import { login } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setUserInputs } from "../../actions/user.actions";

function Login() {
  const dispatch = useDispatch();
  const userInputs = useSelector((state) => state.userState.userInputs);

  const handleUserInputsChange = (e) => {
    const { name, value } = e.target;
    dispatch(setUserInputs({ ...userInputs, [name]: value }));
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    try {
      const data = await login(userInputs);
      dispatch(setUser(data?.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      console.log(data.token);
    } catch (error) {
      console.error(error.message);
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
