import { useContext } from 'react';
import IngredientsCategory from '../ingredients-category/ingredients-category';
import ingredientsListStyles from './ingredients-list.module.css';
import { IngredientsContext } from '../../services/ingredients-context';

function IngredientsList() {
  const ingredients = useContext(IngredientsContext);
  const buns = ingredients.filter((item) => item.type === 'bun');
  const mains = ingredients.filter((item) => item.type === 'main');
  const sauces = ingredients.filter((item) => item.type === 'sauce');

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
