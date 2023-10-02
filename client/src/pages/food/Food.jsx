import "./food.css";
import React from "react";
import Modal from "../../components/modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import FoodForm from "../../components/foodForm/FoodForm";
import {
  handleAddFoodClick,
  handleCloseFoodModal,
  handleDeleteFoodClick,
} from "../../utils/food.utils";

function Food() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const foods = useSelector((state) => state.foodState.foods);
  const isFoodsLoading = useSelector((state) => state.foodState.isFoodsLoading);
  const showFoodModal = useSelector((state) => state.foodState.showFoodModal);

  return (
    <div className="foods">
      {showFoodModal && (
        <Modal closeModal={() => handleCloseFoodModal(dispatch)}>
          <FoodForm />
        </Modal>
      )}

      <div className="add-food">
        <button onClick={() => handleAddFoodClick(dispatch)}>Add Food</button>
      </div>

      <div className="foods-details">
        {isFoodsLoading ? (
          <p>Loading... </p>
        ) : foods.length > 0 ? (
          foods
            ?.slice()
            .reverse()
            .map(({ _id, name, fat, protein, calories, carbohydrates }) => (
              <div key={_id}>
                <h2>{name}</h2>
                <p>Fat : {fat}g</p>
                <p>Protein : {protein}g</p>
                <p>Calories : {calories}kcal</p>
                <p>Carbohydrates : {carbohydrates}g</p>
                <button
                  onClick={() => handleDeleteFoodClick(_id, dispatch, user)}
                >
                  Delete Food
                </button>
              </div>
            ))
        ) : (
          <p>No foods available.</p>
        )}
      </div>
    </div>
  );
}

export default Food;
