import React from "react";
import { setGoalData } from "../../actions/goal.actions";
import { useDispatch, useSelector } from "react-redux";
import { sendGoalToBackend } from "../../services/goal.service";
import { getGoals } from "../../utils/app.utils";

function GoalForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const goalData = useSelector((state) => state.goalState.goalData);

  const handleGoalSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedGoal = await sendGoalToBackend({
        ...goalData,
        user: user._id,
      });
      if (addedGoal) {
        getGoals(dispatch, user._id);
        dispatch(
          setGoalData({
            name: "",
            status: "",
            targetDate: "",
            description: "",
            targetCalories: "",
          })
        );
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  const handleGoalInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setGoalData({ ...goalData, [name]: value }));
  };

  return (
    <>
      {/* Goal Input Form */}
      <form onSubmit={handleGoalSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={goalData.name}
            onChange={handleGoalInputChange}
            required
          />
        </label>

        <label htmlFor="status">
          Status:
          <select
            id="status"
            name="status"
            value={goalData.status}
            onChange={handleGoalInputChange}
            required
          >
            <option value="">Select Status</option>
            <option value="In Progress">In Progress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </select>
        </label>

        <label htmlFor="targetDate">
          Target Date:
          <input
            type="date"
            id="targetDate"
            name="targetDate"
            placeholder="Target Date"
            value={goalData.targetDate}
            onChange={handleGoalInputChange}
            required
          />
        </label>

        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={goalData.description}
            onChange={handleGoalInputChange}
            required
          />
        </label>

        <label htmlFor="targetCalories">
          Target Calories:
          <input
            type="number"
            id="targetCalories"
            name="targetCalories"
            placeholder="Target Calories"
            value={goalData.targetCalories}
            onChange={handleGoalInputChange}
            required
          />
        </label>

        <button type="submit">Add Goal</button>
      </form>
    </>
  );
}

export default GoalForm;
