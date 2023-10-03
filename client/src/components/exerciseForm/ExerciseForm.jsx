import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setExerciseData,
  setShowExerciseModal,
} from "../../actions/exercise.actions";
import { getExercises } from "../../utils/app.utils";
import { sendExerciseToBackend } from "../../services/exercise.service";

function ExerciseForm() {
  const dispatch = useDispatch();
  const exerciseOptions = useSelector(
    (state) => state.exerciseState.exerciseOptions
  );
  const user = useSelector((state) => state.userState.user);
  const exerciseData = useSelector((state) => state.exerciseState.exerciseData);

  const handleExerciseSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedExercise = await sendExerciseToBackend({
        ...exerciseData,
        user: user._id,
      });
      if (addedExercise) {
        getExercises(dispatch, user._id);
        dispatch(setShowExerciseModal(false));
        dispatch(
          setExerciseData({
            name: "",
            duration: "",
          })
        );
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  const handleExerciseInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setExerciseData({ ...exerciseData, [name]: value }));
  };

  return (
    <form onSubmit={handleExerciseSubmit}>
      <label htmlFor="name">
        Exercise:
        <select
          id="name"
          name="name"
          value={exerciseData.name}
          onChange={handleExerciseInputChange}
          required
        >
          <option value="">Select Exercise </option>
          {exerciseOptions.map((option) => (
            <option key={option}>{option} </option>
          ))}
        </select>
      </label>

      <label htmlFor="duration">
        Duration:
        <input
          type="text"
          id="duration"
          name="duration"
          placeholder="Duration"
          value={exerciseData.duration}
          onChange={handleExerciseInputChange}
          required
        />
      </label>

      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default ExerciseForm;
