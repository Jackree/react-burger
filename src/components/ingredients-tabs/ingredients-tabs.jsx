import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsTabsStyles from './ingredients-tabs.module.css';

function IngredientsTabs({ current }) {
  return (
    <div className={`mb-10 ${ingredientsTabsStyles.wrapper}`}>
      <Tab value="Булки" active={current === 'Булки'}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'}>
        Начинки
      </Tab>
    </div>
  );
}

IngredientsTabs.propTypes = {
  current: PropTypes.string.isRequired,
};

export default IngredientsTabs;
