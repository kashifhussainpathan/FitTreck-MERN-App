import { combineReducers } from "redux";
import foodReducer from "./food.reducer";
import goalReducer from "./goal.reducer";
import exerciseReducer from "./exercise.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  foodState: foodReducer,
  goalState: goalReducer,
  userState: userReducer,
  exerciseState: exerciseReducer,
});

export default rootReducer;
