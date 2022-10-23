import { useState, useContext, useReducer } from 'react';
import OrderDetails from '../order-details/order-details';
import Modal from '../modal/modal';
import burgerConstructorStyles from './burger-constructor.module.css';
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from '../../services/ingredients-context';
import { sendOrder } from '../../utils/api';
import { OrderContext } from '../../services/order-context';

function BurgerConstructor() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ingredients = useContext(IngredientsContext);
  const bunIngredient = ingredients.find((item) => item.type === 'bun');
  const innerIngredients = ingredients.filter((item) => item.type !== 'bun');

  const [orderList, setOrderList] = useState([
    bunIngredient._id,
    ...innerIngredients.map((item) => item._id),
    bunIngredient._id,
  ]);

  const [orderNumber, setOrderNumber] = useState(null)

  const initialPriceState = {
    price:
      bunIngredient.price * 2 +
      innerIngredients.reduce((sum, item) => sum + item.price, 0),
  };
  const [priceState, priceDispatcher] = useReducer(reducer, initialPriceState);

  function reducer(state, action) {
    switch (action.type) {
      case 'add':
        return {
          price: state.price + action.price,
        };
      case 'remove':
        return {
          price: state.price - action.price,
        };
      default:
        throw new Error(`Wrong type of action: ${action.type}`);
    }
  }

  const removeIngredientHandler = (element) => {
    priceDispatcher({ type: 'remove', price: element.price });
    const filtered = orderList.filter((item) => item._id !== element._id);
    setOrderList([...filtered]);
  };

  const sendOrderHandler = () => {
    sendOrder(orderList).then((res) => {
      setOrderNumber(res.order.number);

      if (res.success) {
        openModal();
      } else {
        alert('Произошла ошибка при получении номера заказа');
      }
    });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className={`pt-25 ${burgerConstructorStyles.section}`}>
      <div className={burgerConstructorStyles.main}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bunIngredient.name} (верх)`}
            price={bunIngredient.price}
            thumbnail={bunIngredient.image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
          {innerIngredients.map((item) => {
            return (
              <li
                className={`ml-4 ${burgerConstructorStyles.item}`}
                key={item._id}
              >
                <DragIcon />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  handleClose={() => removeIngredientHandler(item)}
                />
              </li>
            );
          })}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bunIngredient.name} (низ)`}
            price={bunIngredient.price}
            thumbnail={bunIngredient.image}
          />
        </div>
      </div>
      <div className={`mt-10 mr-4 ${burgerConstructorStyles.order}`}>
        <p
          className={`text text_type_digits-medium mr-10 ${burgerConstructorStyles.total}`}
        >
          {priceState.price}
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
      {modalIsOpen && (
        <Modal closeModal={closeModal}>
          <OrderContext.Provider value={orderNumber}>
            <OrderDetails />
          </OrderContext.Provider>
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
