import React from 'react';
import BurgerIngredientsList from '../burger-ingredients-list/burger-ingredients-list';
import BurgerIngredientsTabs from '../burger-ingredients-tabs/burger-ingredients-tabs';
import burgerIngredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients(props) {
  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      <h1
        className={`text text_type_main-large mt-10 mb-5 ${burgerIngredientsStyles.title}`}
      >
        Соберите бургер
      </h1>
      <BurgerIngredientsTabs />
      <BurgerIngredientsList ingredients={props.ingredients}/>
    </section>
  );
}

export default BurgerIngredients;
