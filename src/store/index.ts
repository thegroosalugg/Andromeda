import { configureStore } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';

const store = configureStore({ reducer: { ships: shipsSlice } });

export default store;
