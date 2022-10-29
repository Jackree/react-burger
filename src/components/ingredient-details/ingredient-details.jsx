import React from 'react';
import NutritionInfoItem from '../nutrition-info-item/nutrition-info-item';
import ingredientDetailsStyles from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails() {
  const {
    image_large,
    name,
    calories,
    proteins,
    fat,
    carbohydrates,
  } = useSelector((store) => store.ingredient.ingredient);
  return (
    <div className={`mb-5 ${ingredientDetailsStyles.content}`}>
      <img
        className={ingredientDetailsStyles.image}
        src={image_large}
        alt={name}
      />
      <h3
        className={`mt-4 mb-8 text text_type_main-medium ${ingredientDetailsStyles.name}`}
      >
        {name}
      </h3>
      <ul className={`mb-5 ${ingredientDetailsStyles.list}`}>
        <NutritionInfoItem name="Калории, ккал" count={calories} />
        <NutritionInfoItem name="Белки, г" count={proteins} />
        <NutritionInfoItem name="Жиры, г" count={fat} />
        <NutritionInfoItem name="Углеводы, г" count={carbohydrates} />
      </ul>
    </div>
  );
}

export default IngredientDetails;
