import React from 'react';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import burgerIngredientsItemStyles from './burger-ingredients-item.module.css';

function BurgerIngredientsItem({ name, image, price }) {
  return (
    <li className={burgerIngredientsItemStyles.item}>
      <Counter count={1} size="default" />
      <img className="pl-4 pr-4" src={image} alt={name}/>
      <p
        className={`${burgerIngredientsItemStyles.price} text text_type_digits-default mt-1 mb-1`}
      >
        {price}
        <CurrencyIcon type="primary" />
      </p>
      <p
        className={`${burgerIngredientsItemStyles.name} text text_type_main-default`}
      >
        {name}
      </p>
    </li>
  );
}
export default BurgerIngredientsItem;
