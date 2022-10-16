import IngredientsList from '../ingredients-list/ingredients-list';
import IngredientsTabs from '../ingredients-tabs/ingredients-tabs';
import burgerIngredientsStyles from './burger-ingredients.module.css';

function BurgerIngredients() {
  return (
    <section className={burgerIngredientsStyles.burgerIngredients}>
      <h1
        className={`text text_type_main-large mt-10 mb-5 ${burgerIngredientsStyles.title}`}
      >
        Соберите бургер
      </h1>
      <IngredientsTabs />
      <IngredientsList />
    </section>
  );
}

export default BurgerIngredients;
