import IngredientsCategory from '../ingredients-category/ingredients-category';
import ingredientsListStyles from './ingredients-list.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function IngredientsList() {
  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === 'bun'),
    [ingredients]
  );
  const mains = useMemo(
    () => ingredients.filter((item) => item.type === 'main'),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === 'sauce'),
    [ingredients]
  );
  return (
    <ul className={ingredientsListStyles.list}>
      <li className={`mb-10`}>
        <IngredientsCategory ingredients={buns} title="Булки" />
      </li>
      <li className={`mb-10`}>
        <IngredientsCategory ingredients={sauces} title="Соусы" />
      </li>
      <li>
        <IngredientsCategory ingredients={mains} title="Начинки" />
      </li>
    </ul>
  );
}

export default IngredientsList;
