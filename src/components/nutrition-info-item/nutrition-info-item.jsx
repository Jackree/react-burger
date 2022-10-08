import React from 'react';
import PropTypes from 'prop-types';
import nutritionInfoItemStyles from './nutrition-info-item.module.css';

function NutritionInfoItem({ count, name }) {
  return (
    <li className={nutritionInfoItemStyles.item}>
      <p
        className={`text text_type_main-default text_color_inactive ${nutritionInfoItemStyles.item_name}`}
      >
        {name}
      </p>
      <p
        className={`text text_type_digits-default text_color_inactive ${nutritionInfoItemStyles.item_value}`}
      >
        {count}
      </p>
    </li>
  );
}

NutritionInfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default NutritionInfoItem;
