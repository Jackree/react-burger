import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsItemStyles from './ingredients-item.module.css';

function IngredientsItem({ name, image, price }) {
  return (
    <li className={ingredientsItemStyles.item}>
      <Counter count={1} size="default" />
      <img className="pl-4 pr-4" src={image} alt={name}/>
      <p
        className={`${ingredientsItemStyles.price} text text_type_digits-default mt-1 mb-1`}
      >
        {price}
        <CurrencyIcon type="primary" />
      </p>
      <p
        className={`${ingredientsItemStyles.name} text text_type_main-default`}
      >
        {name}
      </p>
    </li>
  );
}

IngredientsItem.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default IngredientsItem;
