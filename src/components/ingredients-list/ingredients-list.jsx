import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import ingredientsListStyles from './ingredients-list.module.css';

function IngredientsList(props) {
  const buns = props.ingredients.filter((item) => item.type === 'bun');
  const mains = props.ingredients.filter((item) => item.type === 'main');
  const sauces = props.ingredients.filter((item) => item.type === 'sauce');

  return (
    <ul className={ingredientsListStyles.list}>
      <li className={`mb-10`}>
        <IngredientsCategory ingredients={buns} title='Булки'/>
      </li>
      <li className={`mb-10`}>
        <IngredientsCategory ingredients={sauces} title='Соусы'/>
      </li>
      <li>
        <IngredientsCategory ingredients={mains} title='Начинки'/>
      </li>
    </ul>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientsList;
