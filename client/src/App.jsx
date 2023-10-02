import { useEffect } from "react";
import Food from "./pages/food/Food";
import Goal from "./pages/goal/Goal";
import User from "./pages/user/User";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Exercise from "./pages/exercise/Exercise";
import { setIsLoggedIn, setToken } from "./actions/user.actions";
import Dashboard from "./pages/dashboard/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import {
  getGoals,
  getFoods,
  getExercises,
  getExercisesOptions,
  getUser,
} from "./utils/app.utils";
import RequiresAuth from "./components/RequiresAuth";

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
          <Route
            path="/"
            element={
              <RequiresAuth>
                <Dashboard />
              </RequiresAuth>
            }
          />
          <Route path="/user" element={<User />} />
          <Route
            path="/goal"
            element={
              <RequiresAuth>
                <Goal />{" "}
              </RequiresAuth>
            }
          />
          <Route
            path="/food"
            element={
              <RequiresAuth>
                <Food />
              </RequiresAuth>
            }
          />
          <Route
            path="/exercise"
            element={
              <RequiresAuth>
                <Exercise />
              </RequiresAuth>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
