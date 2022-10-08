import React from 'react';
import orderDetailsStyles from './order-details.module.css';
import doneImage from '../../images/order-details/done.png';
function OrderDetails() {
  return (
    <div className={`mb-20 ${orderDetailsStyles.content}`}>
      <p
        className={`text text_type_digits-large mb-8 mt-4 ${orderDetailsStyles.number}`}
      >
        034536
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img className={orderDetailsStyles.image} src={doneImage} alt=" " />
      <p className="text text_type_main-default mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
