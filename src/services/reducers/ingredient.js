import { SET_MODAL_INGREDIENT, REMOVE_MODAL_INGREDIENT } from '../actions/ingredient';

const initialState = {
  ingredient: {},
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL_INGREDIENT: {
      return {
        ...state,
        ingredient: action.ingredient,
      };
    }

    case REMOVE_MODAL_INGREDIENT: {
      return {
        ...state,
        ingredient: {},
      };
    }

    default: {
      return state;
    }
  }
};
