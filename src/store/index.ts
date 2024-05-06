import { configureStore, Middleware, combineReducers  } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';
import modalSlice from './modalSlice';
import userSlice from './userSlice';
import formSlice from './formSlice'

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const rootReducer = combineReducers({
  ships: shipsSlice,
  modal: modalSlice,
  users: userSlice,
  form: formSlice,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: JSON.parse(localStorage.getItem('reduxState') || '{}'),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

store.dispatch({ type: 'INITIAL_SAVE' });

export default store;
