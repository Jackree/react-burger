import { sendOrder } from '../../utils/api';
import { CLEAR_CONSTRUCTOR } from './burger-constructor';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED';
export const DELETE_ORDER_ITEM = 'DELETE_ORDER_ITEM';

export function getOrder(ingredients) {
  return function (dispatch) {
    dispatch({ type: GET_ORDER_REQUEST });

    sendOrder(ingredients)
      .then((res) => {
        if (res) {
          dispatch({ type: GET_ORDER_SUCCESS, data: res });
          dispatch({ type: CLEAR_CONSTRUCTOR });
        } else {
          throw new Error(res.errorMessage);
        }
      })
      .catch((err) => {
        dispatch({ type: GET_ORDER_FAILED });
      });
  };
}
