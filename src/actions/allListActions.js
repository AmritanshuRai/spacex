import {
  FETCH_ALL_LIST_START,
  FETCH_ALL_LIST_SUCCESS,
  FETCH_ALL_LIST_FAILURE,
} from '../constants/allListConstants';

const baseUrl = 'https://api.spacexdata.com/v4/';
export const fetchAllList = (currentCategory) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_LIST_START });
    const url = currentCategory === 'news' ? 'history' : 'payloads';
    let response = await fetch(baseUrl + url);
    const data = await response.json();
    dispatch({ type: FETCH_ALL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_ALL_LIST_FAILURE, payload: error.message });
  }
};
