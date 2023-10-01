import "./goal.css";
import React from "react";
import Modal from "../../components/modal/MOdal";
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

      <div className="goals-details">
        {goals.length > 0 ? (
          goals?.map(
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
                <p>{description}</p>
                <p>Target Calories: {targetCalories}</p>
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

      <div>
        <button onClick={() => handleAddGoalClick(dispatch)}>Add Goal</button>
      </div>
    </div>
  );
}

export default Goal;
