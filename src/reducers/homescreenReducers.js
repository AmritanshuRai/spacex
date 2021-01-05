import { CATEGORY } from '../constants/homescreenConstants';

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY:
      return { ...state, currentCategory: action.payload };

    default:
      return state;
  }
};
