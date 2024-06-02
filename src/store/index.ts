import { configureStore, Middleware, combineReducers  } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import modalSlice from './modalSlice';
import userSlice from './userSlice';
import formSlice from './formSlice'
import cartSlice from './cartSlice';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const rootReducer = combineReducers({
  items: itemsSlice,
  modal: modalSlice,
  users: userSlice,
  form: formSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: JSON.parse(localStorage.getItem('reduxState') || '{}'),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

store.dispatch({ type: 'INITIAL_SAVE' });

export default store;
