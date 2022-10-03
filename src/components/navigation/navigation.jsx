import React from 'react';
import {
  BurgerIcon,
  ListIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import navigationStyles from './navigation.module.css';

function Navigation() {
  return (
    <nav>
      <ul className={navigationStyles.list}>
        <li className={navigationStyles.item}>
          <a
            className={`text text_type_main-default pt-4 pb-4 pl-5 pr-5 mr-2 ${navigationStyles.link} ${navigationStyles.active}`}
            href='#root'
          >
            <BurgerIcon type="primary" />
            Конструктор
          </a>
        </li>
        <li className={navigationStyles.item}>
          <a
            className={`text text_type_main-default pt-4 pb-4 pl-5 pr-5 ${navigationStyles.link}`}
            href='#root'
          >
            <ListIcon type="secondary" />
            Лента заказов
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
