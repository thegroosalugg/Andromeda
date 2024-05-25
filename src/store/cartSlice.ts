import Clothes from '@/models/Clothes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

const initialState: RootState['cart'] = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Clothes>) => {
      state.items.push(action.payload)
    }
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
