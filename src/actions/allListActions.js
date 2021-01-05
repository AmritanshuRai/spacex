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
    // console.log('data: ', data);
    // if (data.error) {
    //   throw new Error(data.error);
    // }
    // Alert('success', `Welcome, ${user.username}!`);

    // history,push('/profile')
    dispatch({ type: FETCH_ALL_LIST_SUCCESS, payload: data });
    // localStorage.setItem(
    //   'userInfo',
    //   JSON.stringify({ user, token: data.token })
    // );
  } catch (error) {
    dispatch({ type: FETCH_ALL_LIST_FAILURE, payload: error.message });
    // Alert('error', error.message);
  }
};
