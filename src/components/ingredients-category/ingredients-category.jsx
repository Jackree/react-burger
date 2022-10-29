import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import IngredientsItem from '../ingredients-item/ingredients-item';
import ingredientsCategoryStyles from './ingredients-category.module.css';

function IngredientsCategory({ title, ingredients }) {
  return (
    <div>
      <h2
        className={`text text_type_main-medium mb-6 ${ingredientsCategoryStyles.title}`}
      >
        {title}
      </h2>
      <ul className={`${ingredientsCategoryStyles.list}`}>
        {ingredients.length > 0 &&
          ingredients.map((item) => {
            return <IngredientsItem item={item} key={item._id} />;
          })}
      </ul>
    </div>
  );
}

IngredientsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default IngredientsCategory;
