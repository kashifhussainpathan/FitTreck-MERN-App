import "./dashboard.css";
import burn from "../../assets/burn.png";
import food from "../../assets/food.png";
import goal from "../../assets/goal.png";
import exercise from "../../assets/exercise.png";
import { useSelector } from "react-redux";
import EChartPieComponent from "../../components/EChartPieComponent";

function Dashboard() {
  const user = useSelector((state) => state.userState.user);
  const foods = useSelector((state) => state.foodState.foods);
  const goals = useSelector((state) => state.goalState.goals);
  const exercises = useSelector((state) => state.exerciseState.exercises);

  const totalCaloriesGoal = goals.reduce(
    (sum, goal) => goal.targetCalories + sum,
    0
  );

  const totalCaloriesConsumed = foods.reduce(
    (sum, food) => food.calories + sum,
    0
  );

  const totalCaloriesBurned = exercises.reduce(
    (sum, exercise) => exercise.caloriesBurned + sum,
    0
  );

  const remainingCaloriesToGoal =
    totalCaloriesGoal - (totalCaloriesConsumed - totalCaloriesBurned);

  const calorieData = [
    { value: totalCaloriesBurned, name: "Calories Burned" },
    { value: totalCaloriesGoal, name: "Calories Goal" },
    { value: totalCaloriesConsumed, name: "Calories Consumed" },
    { value: remainingCaloriesToGoal, name: "Remaining Calories to Goal" },
  ];

  return (
    <section className="caloriesSummary">
      <div className="caloriesSummary__details">
        <div className="caloriesSummary__detail">
          <img src={burn} alt="burnImage" />
          <div>
            <span>Calories burned : </span>
            <span>{totalCaloriesBurned} kcal</span>
          </div>
        </div>

        <div className="caloriesSummary__detail">
          <img src={exercise} alt="ExerciseImage" />
          <div>
            <span>Calories goal : </span>
            <span>{totalCaloriesGoal} kcal</span>
          </div>
        </div>

        <div className="caloriesSummary__detail">
          <img src={food} alt="foodImage" />
          <div>
            <span>Calories Consumed : </span>{" "}
            <span>{totalCaloriesConsumed} kcal </span>
          </div>
        </div>

        <div className="caloriesSummary__detail">
          <img src={goal} alt="goalImage" />
          <div>
            <span>Goal Calories Left : </span>
            <span>{remainingCaloriesToGoal}kcal </span>
          </div>
        </div>
      </div>

      {Object.keys(user).length > 0 && (
        <div className="caloriesChart">
          <EChartPieComponent calorieData={calorieData} />
        </div>
      )}
    </section>
  );
}

export default Dashboard;
