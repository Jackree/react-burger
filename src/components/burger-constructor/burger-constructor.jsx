import React from 'react';
import PropTypes from 'prop-types';
import burgerConstructorStyles from './burger-constructor.module.css';
import { ingredientPropTypes } from '../../utils/ingredientPropTypes';
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button
} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
  return (
    <section className={`pt-25 ${burgerConstructorStyles.section}`}>
      <div className={burgerConstructorStyles.main}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${props.ingredients[0].name} (верх)`}
            price={props.ingredients[0].price}
            thumbnail={props.ingredients[0].image}
          />
        </div>
        <ul className={burgerConstructorStyles.list}>
          {props.ingredients.map((item) => {
            return (
              <li className={`ml-4 ${burgerConstructorStyles.item}`}>
                <DragIcon />
                <ConstructorElement
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                />
              </li>
            );
          })}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${props.ingredients[0].name} (низ)`}
            price={props.ingredients[0].price}
            thumbnail={props.ingredients[0].image}
          />
        </div>
      </div>
      <div className={`mt-10 mr-4 ${burgerConstructorStyles.order}`}>
        <p className={`text text_type_digits-medium mr-10 ${burgerConstructorStyles.total}`}>
          610
          <CurrencyIcon type="primary" />
        </p>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired
}

export default BurgerConstructor;
