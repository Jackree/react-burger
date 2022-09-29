import React from 'react';
import BurgerIngredientsItem from '../burger-ingredients-item/burger-ingredients-item';
import burgerIngredientsListStyles from './burger-ingredients-list.module.css';

function BurgerIngredientsList(props) {
  return (
    <ul className={burgerIngredientsListStyles.list}>
      {props.ingredients.map(item => {
        return (<BurgerIngredientsItem key={item._id} {...item}/>);
      })}
    </ul>
  );
}

export default BurgerIngredientsList;
