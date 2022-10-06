import React from 'react';
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ingredientsItemStyles from './ingredients-item.module.css';

function IngredientsItem(props) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <li className={ingredientsItemStyles.item} onClick={openModal}>
        <Counter count={1} size="default" />
        <img className="pl-4 pr-4" src={props.image} alt={props.name} />
        <p
          className={`${ingredientsItemStyles.price} text text_type_digits-default mt-1 mb-1`}
        >
          {props.price}
          <CurrencyIcon type="primary" />
        </p>
        <p
          className={`${ingredientsItemStyles.name} text text_type_main-default`}
        >
          {props.name}
        </p>
      </li>
      {modalIsOpen && (
        <Modal title="Детали ингредиента" closeModal={closeModal}>
          <IngredientDetails {...props} />
        </Modal>
      )}
    </>
  );
}

IngredientsItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default IngredientsItem;
