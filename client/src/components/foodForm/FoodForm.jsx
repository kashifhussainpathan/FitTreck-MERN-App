import React from "react";
import { getFoods } from "../../utils/app.utils";
import { useDispatch, useSelector } from "react-redux";
import { setFoodData, setShowFoodModal } from "../../actions/food.actions";
import { sendFoodToBackend } from "../../services/food.service";

function FoodForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);
  const foodData = useSelector((state) => state.foodState.foodData);

  const handleFoodSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedFood = await sendFoodToBackend({
        ...foodData,
        user: user._id,
      });
      if (addedFood) {
        getFoods(dispatch, user._id);
        dispatch(setShowFoodModal(false));
        dispatch(
          setFoodData({
            name: "",
            fat: "",
            protein: "",
            calories: "",
            carbohydrates: "",
          })
        );
      }
    } catch (error) {
      alert(`${error}`);
    }
  };

  const handleFoodInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFoodData({ ...foodData, [name]: value }));
  };

  return (
    <>
      {/* Food Input Form */}
      <form onSubmit={handleFoodSubmit}>
        <label htmlFor="name">
          Food Name:
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Food Name"
            value={foodData?.name}
            onChange={handleFoodInputChange}
            required
          />
        </label>

        <label htmlFor="fat">
          Fat:
          <input
            type="number"
            id="fat"
            name="fat"
            placeholder="Fat"
            value={foodData?.fat}
            onChange={handleFoodInputChange}
            required
          />
        </label>

        <label htmlFor="protein">
          Protein:
          <input
            type="number"
            id="protein"
            name="protein"
            placeholder="Protein"
            value={foodData?.protein}
            onChange={handleFoodInputChange}
            required
          />
        </label>

        <label htmlFor="calories">
          Calories:
          <input
            type="number"
            id="calories"
            name="calories"
            placeholder="Calories"
            value={foodData?.calories}
            onChange={handleFoodInputChange}
            required
          />
        </label>

        <label htmlFor="carbohydrates">
          Carbohydrates:
          <input
            type="number"
            id="carbohydrates"
            name="carbohydrates"
            placeholder="Carbohydrates"
            value={foodData?.carbohydrates}
            onChange={handleFoodInputChange}
            required
          />
        </label>

        <button type="submit">Add Food</button>
      </form>
    </>
  );
}

export default FoodForm;
