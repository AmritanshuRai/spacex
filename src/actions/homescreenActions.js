import { CATEGORY } from '../constants/homescreenConstants';

// import Alert from '../components/alert/Alert';

export const setCategory = (data) => (dispatch) => {
  dispatch({ type: CATEGORY, payload: data });
};
