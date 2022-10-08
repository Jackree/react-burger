const INGREDIENTS_LINK = 'https://norma.nomoreparties.space/api/ingredients';

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = async () => {
  return fetch(INGREDIENTS_LINK)
    .then(checkReponse)
    .then((obj) => {
      return obj.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
