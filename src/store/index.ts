import { configureStore } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';
import uiSlice from './uiSlice';

const store = configureStore({ reducer: { ships: shipsSlice, ui: uiSlice } });

export default store;
