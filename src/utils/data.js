const INGREDIENTS_LINK = 'https://norma.nomoreparties.space/api/ingredients';

export const getIngredients = async () => {
  return fetch(INGREDIENTS_LINK)
    .then((res) => res.json())
    .then((obj) => {
      return obj.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
