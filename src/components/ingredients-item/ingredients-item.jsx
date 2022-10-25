import React from 'react';
import PropTypes from 'prop-types';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import ingredientsItemStyles from './ingredients-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODAL_INGREDIENT } from '../../services/actions/ingredient';
import { useDrag } from 'react-dnd';

function IngredientsItem({ item }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredients',
    item: { item },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });
  const counter = useSelector((store) => {
    if (item.type === 'bun') {
      return store.burgerConstructor.dataConstructor.bun.filter(
        (element) => element.item._id === item._id
      ).length;
    } else {
      return store.burgerConstructor.dataConstructor.items.filter(
        (element) => element.item._id === item._id
      ).length;
    }
  });
  const dispatch = useDispatch();

  const openModal = (e) => {
    dispatch({ type: SET_MODAL_INGREDIENT, ingredient: { ...item } });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <li
        className={ingredientsItemStyles.item}
        onClick={openModal}
        ref={dragRef}
        style={{ opacity }}
      >
        {counter !== 0 && <Counter count={counter} size="default" />}
        <img className="pl-4 pr-4" src={item.image} alt={item.name} />
        <p
          className={`${ingredientsItemStyles.price} text text_type_digits-default mt-1 mb-2`}
        >
          {item.price}
          <CurrencyIcon type="primary" />
        </p>
        <p
          className={`${ingredientsItemStyles.name} text text_type_main-default`}
        >
          {item.name}
        </p>
      </li>
      {modalIsOpen && (
        <Modal
          title="Детали ингредиента"
          closeModal={closeModal}
          modalType="ingredient"
        >
          <IngredientDetails />
        </Modal>
      )}
    </>
  );
}

IngredientsItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default IngredientsItem;
