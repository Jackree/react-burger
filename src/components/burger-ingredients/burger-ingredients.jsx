import { useState } from 'react';
import IngredientsList from '../ingredients-list/ingredients-list';
import IngredientsTabs from '../ingredients-tabs/ingredients-tabs';
import burgerIngredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients() {
  const [current, setCurrent] = useState('Булки');
  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      <h1
        className={`text text_type_main-large mt-10 mb-5 ${burgerIngredientsStyles.title}`}
      >
        Соберите бургер
      </h1>
      <IngredientsTabs current={current}/>
      <IngredientsList setCurrent={setCurrent}/>
    </section>
  );
}

export default BurgerIngredients;
