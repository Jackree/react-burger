import { useCallback, useState } from 'react';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import burgerConstructorStyles from './burger-constructor.module.css';
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_ORDER_ITEM, getOrder } from '../../services/actions/order';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
  ADD_BUN,
  ADD_INGREDIENT,
  REMOVE_BUN,
  UPDATE_CONSTRUCTOR_LIST,
} from '../../services/actions/burger-constructor';
import { BurgerConstructorIngredient } from '../burger-constructor-ingredient/burger-constructor-ingredient';

function BurgerConstructor() {
  const dispatch = useDispatch();

  const bunIngredient = useSelector(
    (store) => store.burgerConstructor.dataConstructor.bun
  );
  const innerIngredients = useSelector(
    (store) => store.burgerConstructor.dataConstructor.items
  );
  const totalPrice = useSelector((store) => store.burgerConstructor.totalPrice);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const order = useSelector((store) => store.order);

  const addBun = (item) => {
    return {
      type: ADD_BUN,
      payload: {
        ...item,
      },
    };
  };

  const removeBun = () => {
    return {
      type: REMOVE_BUN,
    };
  };

  const addIngredient = (item, uid) => {
    return {
      type: ADD_INGREDIENT,
      payload: {
        ...item,
        uid,
      },
    };
  };

  const updateConstructorList = (items) => {
    return {
      type: UPDATE_CONSTRUCTOR_LIST,
      payload: items,
    };
  };

  const [, dropRef] = useDrop({
    accept: 'ingredients',
    drop(item) {
      if (item.item) {
        if (item.item.type === 'bun') {
          if (bunIngredient.length > 0) {
            dispatch(removeBun());
          }
          dispatch(addBun(item));
        } else {
          dispatch(addIngredient(item, uuidv4()));
        }
      }
    },
  });

  const sendOrderHandler = () => {
    if (bunIngredient.length && innerIngredients.length) {
      const orderList = [
        bunIngredient[0].item._id,
        ...innerIngredients.map((item) => item.item._id),
        bunIngredient[0].item._id,
      ];

      dispatch(getOrder(orderList));

      openModal();
    }
  };

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = innerIngredients[dragIndex];
      const newItems = [...innerIngredients];

      newItems.splice(dragIndex, 1);
      newItems.splice(hoverIndex, 0, dragItem);

      dispatch(updateConstructorList(newItems));
    },
    [innerIngredients, dispatch]
  );

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    dispatch({ type: DELETE_ORDER_ITEM });
  };

  return (
    <section
      className={`pt-25 ${burgerConstructorStyles.section}`}
      ref={dropRef}
    >
      <div className={burgerConstructorStyles.main}>
        <div className="ml-8">
          {bunIngredient.length > 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bunIngredient[0].item.name} (верх)`}
              price={bunIngredient[0].item.price}
              thumbnail={bunIngredient[0].item.image}
            />
          )}
        </div>
        <ul className={burgerConstructorStyles.list}>
          {innerIngredients.length > 0 &&
            innerIngredients.map((item, index) => {
              return (
                <BurgerConstructorIngredient
                  item={item}
                  key={item.uid}
                  uid={item.uid}
                  index={index}
                  moveItem={moveItem}
                />
              );
            })}
        </ul>
        <div className="ml-8">
          {bunIngredient.length > 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bunIngredient[0].item.name} (низ)`}
              price={bunIngredient[0].item.price}
              thumbnail={bunIngredient[0].item.image}
            />
          )}
        </div>
      </div>
      <div className={`mt-10 mr-4 ${burgerConstructorStyles.order}`}>
        <p
          className={`text text_type_digits-medium mr-10 ${burgerConstructorStyles.total}`}
        >
          {totalPrice}
          <CurrencyIcon type="primary" />
        </p>
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={sendOrderHandler}
        >
          Оформить заказ
        </Button>
      </div>
      {modalIsOpen && order.order.order && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
