import {
  ADD_BUN,
  ADD_INGREDIENT,
  REMOVE_BUN,
  REMOVE_INGREDIENT,
  UPDATE_CONSTRUCTOR_LIST,
  CLEAR_CONSTRUCTOR
} from '../actions/burger-constructor';

const initialState = {
  dataConstructor: {
    bun: [],
    items: [],
  },
  totalPrice: 0,
};

export const burgerConstructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        dataConstructor: {
          ...state.dataConstructor,
          bun: [...state.dataConstructor.bun, action.payload],
        },
        totalPrice: state.totalPrice + action.payload.item.price * 2,
      };
    }

    case REMOVE_BUN: {
      return {
        ...state,
        dataConstructor: {
          ...state.dataConstructor,
          bun: [],
        },
        totalPrice:
          state.totalPrice - state.dataConstructor.bun[0].item.price * 2,
      };
    }

    case ADD_INGREDIENT: {
      return {
        ...state,
        dataConstructor: {
          ...state.dataConstructor,
          items: [...state.dataConstructor.items, action.payload],
        },
        totalPrice: state.totalPrice + action.payload.item.price,
      };
    }

    case REMOVE_INGREDIENT: {
      return {
        ...state,
        dataConstructor: {
          ...state.dataConstructor,
          items: state.dataConstructor.items.filter(
            (element) => element.uid !== action.payload.uid
          ),
        },
        totalPrice: state.totalPrice - action.payload.item.price,
      };
    }

    case UPDATE_CONSTRUCTOR_LIST: {
      return {
        ...state,
        dataConstructor: {
          ...state.dataConstructor,
          items: action.payload,
        },
      };
    }

    case CLEAR_CONSTRUCTOR: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
