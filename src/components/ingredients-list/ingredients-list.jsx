import IngredientsCategory from '../ingredients-category/ingredients-category';
import ingredientsListStyles from './ingredients-list.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

function IngredientsList({ setCurrent }) {
  const ingredients = useSelector(
    (store) => store.burgerIngredients.ingredients
  );

  const bunsRef = useRef();
  const mainsRef = useRef();
  const saucesRef = useRef();
  const listRef = useRef();

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

  const handleScroll = () => {
    const listPos = parseInt(listRef.current.getBoundingClientRect().top);
    const bunsPos = parseInt(bunsRef.current.getBoundingClientRect().top);
    const mainsPos = parseInt(mainsRef.current.getBoundingClientRect().top);
    const saucesPos = parseInt(saucesRef.current.getBoundingClientRect().top);

    if (bunsPos <= listPos && saucesPos > listPos && mainsPos > listPos) {
      setCurrent('Булки');
    } else if (saucesPos <= listPos && mainsPos > listPos) {
      setCurrent('Соусы');
    } else {
      setCurrent('Начинки');
    }
  };

  useEffect(() => {
    const listNode = listRef.current;
    listNode.addEventListener('scroll', handleScroll);

    return () => {
      listNode.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <ul className={ingredientsListStyles.list} ref={listRef}>
      <li className={`mb-10`} ref={bunsRef}>
        <IngredientsCategory ingredients={buns} title="Булки" />
      </li>
      <li className={`mb-10`} ref={saucesRef}>
        <IngredientsCategory ingredients={sauces} title="Соусы" />
      </li>
      <li ref={mainsRef}>
        <IngredientsCategory ingredients={mains} title="Начинки" />
      </li>
    </ul>
  );
}

IngredientsList.propTypes = {
  setCurrent: PropTypes.func.isRequired,
};

export default IngredientsList;
