import "./goal.css";
import React from "react";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import GoalForm from "../../components/goalForm/GoalForm";
import {
  formatDate,
  handleAddGoalClick,
  handleCloseGoalModal,
  handleDeleteGoalClick,
} from "../../utils/goal.utils";

function Goal() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const goals = useSelector((state) => state.goalState.goals);
  const showGoalModal = useSelector((state) => state.goalState.showGoalModal);

  return (
    <div className="goals">
      {showGoalModal && (
        <Modal closeModal={() => handleCloseGoalModal(dispatch)}>
          <GoalForm />
        </Modal>
      )}

      <div className="add-goal">
        <button onClick={() => handleAddGoalClick(dispatch)}>Add Goal</button>
      </div>

      <div className="goals-details">
        {goals.length > 0 ? (
          goals
            ?.slice()
            .reverse()
            .map(
              ({
                _id,
                name,
                status,
                targetDate,
                description,
                targetCalories,
              }) => (
                <div key={_id}>
                  <h2>{name} </h2>
                  <p>Status: {status}</p>
                  <p>Target Date: {formatDate(targetDate)}</p>
                  <p className="description">{description}</p>
                  <p>Target Calories: {targetCalories} kcal</p>
                  <button
                    onClick={() => handleDeleteGoalClick(_id, dispatch, user)}
                  >
                    Delete Goal
                  </button>
                </div>
              )
            )
        ) : (
          <p>No goals available. </p>
        )}
      </div>
    </div>
  );
}

export default Goal;
