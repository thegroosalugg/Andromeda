import { configureStore } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';
import modalSlice from './modalSlice';

const store = configureStore({ reducer: { ships: shipsSlice, modal: modalSlice } });

export default store;
