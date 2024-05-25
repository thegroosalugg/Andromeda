import Clothes from '@/models/Clothes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

const initialState: RootState['cart'] = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Clothes>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state.items[index].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<Clothes>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      if (index !== -1) {
        state.items[index].quantity -= 1;

        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
