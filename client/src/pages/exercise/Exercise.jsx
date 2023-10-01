import "./exercise.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ExerciseForm from "../../components/exerciseForm/ExerciseForm";
import {
  handleAddExerciseClick,
  handleCloseExerciseModal,
  handleDeleteExerciseClick,
} from "../../utils/exercise.utils";
import Modal from "../../components/modal/Modal";

function Exercise() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const exercises = useSelector((state) => state.exerciseState.exercises);
  const showExerciseModal = useSelector(
    (state) => state.exerciseState.showExerciseModal
  );

  return (
    <div className="exercises">
      {showExerciseModal && (
        <Modal closeModal={() => handleCloseExerciseModal(dispatch)}>
          <ExerciseForm />
        </Modal>
      )}

      <div className="exercises-details">
        {exercises.length > 0 ? (
          exercises?.map(({ _id, name, duration, caloriesBurned }) => (
            <div key={_id}>
              <h2>{name}</h2>
              <p>Duration: {duration}min</p>
              <p>Calories Burned: {caloriesBurned}kcal</p>
              <button
                onClick={() => handleDeleteExerciseClick(_id, dispatch, user)}
              >
                Delete Exercise
              </button>
            </div>
          ))
        ) : (
          <p>No exercises available. </p>
        )}
      </div>

      <div>
        <button onClick={() => handleAddExerciseClick(dispatch)}>
          Add Exerise
        </button>
      </div>
    </div>
  );
}

export default Exercise;
