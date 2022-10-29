const API_LINK = 'https://norma.nomoreparties.space/api';
const ORDERS_LINK = `${API_LINK}/orders`;
const INGREDIENTS_LINK = `${API_LINK}/ingredients`;

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const request = (url, options) => {
  return fetch(url, options).then(checkReponse);
};

export const getIngredients = async () => {
  return request(INGREDIENTS_LINK).then((obj) => {
    return obj.data;
  });
};

export const sendOrder = async (data) => {
  return request(ORDERS_LINK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  }).then((res) => {
    return res;
  });
};
