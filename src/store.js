import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { categoryReducer } from './reducers/homescreenReducers';
import { allListReducer } from './reducers/allListReducers';

const reducer = combineReducers({
  category: categoryReducer,
  allList: allListReducer,
});

// const cartItemsFromStorage = localStorage.getItem('cartItems');
// const cartItems = cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [];

// const userInfoFromStorage = localStorage.getItem('userInfo');
// const userInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress');
// const shippingAddress = shippingAddressFromStorage
//   ? JSON.parse(shippingAddressFromStorage)
//   : {};

const initialState = {
  // currentCategory: 'news',
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
