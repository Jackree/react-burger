import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import IngredientsItem from '../ingredients-item/ingredients-item';
import ingredientsCategoryStyles from './ingredients-category.module.css';

function IngredientsCategory(props) {
  return (
    <div>
      <h2
        className={`text text_type_main-medium mb-6 ${ingredientsCategoryStyles.title}`}
      >
        {props.title}
      </h2>
      <ul className={`${ingredientsCategoryStyles.list}`}>
        {props.ingredients.map((item) => {
          return <IngredientsItem key={item._id} {...item} />;
        })}
      </ul>
    </div>
  );
}

IngredientsCategory.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientsCategory;
