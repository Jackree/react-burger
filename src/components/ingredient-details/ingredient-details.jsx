import React from 'react';
import PropTypes from 'prop-types';
import NutritionInfoItem from '../nutrition-info-item/nutrition-info-item';
import ingredientDetailsStyles from './ingredient-details.module.css';

function IngredientDetails({
  image_large,
  name,
  calories,
  proteins,
  fat,
  carbohydrates,
}) {
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

IngredientDetails.propTypes = {
  image_large: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
};

export default IngredientDetails;
