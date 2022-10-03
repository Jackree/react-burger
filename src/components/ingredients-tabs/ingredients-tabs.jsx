import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsTabsStyles from './ingredients-tabs.module.css';

function IngredientsTabs() {
  const [current, setCurrent] = React.useState('Булки');
  return (
    <div className={`mb-10 ${ingredientsTabsStyles.wrapper}`}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default IngredientsTabs;
