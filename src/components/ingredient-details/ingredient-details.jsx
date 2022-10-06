import React from 'react';
import PropTypes from 'prop-types';
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
        <li className={ingredientDetailsStyles.item}>
          <p
            className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.item_name}`}
          >
            Калории, ккал
          </p>
          <p
            className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.item_value}`}
          >
            {calories}
          </p>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <p
            className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.item_name}`}
          >
            Белки, г
          </p>
          <p
            className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.item_value}`}
          >
            {proteins}
          </p>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <p
            className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.item_name}`}
          >
            Жиры, г
          </p>
          <p
            className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.item_value}`}
          >
            {fat}
          </p>
        </li>
        <li className={ingredientDetailsStyles.item}>
          <p
            className={`text text_type_main-default text_color_inactive ${ingredientDetailsStyles.item_name}`}
          >
            Углеводы, г
          </p>
          <p
            className={`text text_type_digits-default text_color_inactive ${ingredientDetailsStyles.item_value}`}
          >
            {carbohydrates}
          </p>
        </li>
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
