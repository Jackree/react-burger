const API_LINK = 'https://norma.nomoreparties.space/api';

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = async () => {
  return fetch(`${API_LINK}/ingredients`)
    .then(checkReponse)
    .then((obj) => {
      return obj.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const sendOrder = async (data) => {
  return fetch(`${API_LINK}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then(checkReponse)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
