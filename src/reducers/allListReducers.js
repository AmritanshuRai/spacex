import {
  FETCH_ALL_LIST_START,
  FETCH_ALL_LIST_FAILURE,
  FETCH_ALL_LIST_SUCCESS,
} from '../constants/allListConstants';

export const allListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_LIST_START:
      return { ...state, loading: true };
    case FETCH_ALL_LIST_SUCCESS:
      return { loading: false, allList: action.payload };
    case FETCH_ALL_LIST_FAILURE:
      return { loading: false, allList: action.payload };

    default:
      return state;
  }
};
