import { configureStore } from '@reduxjs/toolkit';
import shipsSlice from './shipsSlice';
import modalSlice from './modalSlice';
import userSlice from './userSlice';

const store = configureStore({ reducer: { ships: shipsSlice, modal: modalSlice, users: userSlice } });

export default store;
