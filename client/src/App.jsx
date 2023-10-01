import { useEffect } from "react";
import Food from "./pages/food/Food";
import Goal from "./pages/goal/Goal";
import User from "./pages/user/User";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Exercise from "./pages/exercise/Exercise";
import { setToken } from "./actions/user.actions";
import Dashboard from "./pages/dashboard/Dashboard";
import {
  getGoals,
  getFoods,
  getExercises,
  getExercisesOptions,
  getUser,
} from "./utils/app.utils";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  useEffect(() => {
    const tokenString = localStorage.getItem("token");

    if (tokenString && tokenString !== "undefined") {
      const token = JSON.parse(tokenString);
      dispatch(setToken(token));
      getUser(token, dispatch);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getExercisesOptions(dispatch);
      getFoods(dispatch, user._id);
      getGoals(dispatch, user._id);
      getExercises(dispatch, user._id);
    }
  }, [user]);

  return (
    <div className="app">
      <Navbar />

      <div className="app__routes">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/goal" element={<Goal />} />
          <Route path="/food" element={<Food />} />
          <Route path="/exercise" element={<Exercise />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
