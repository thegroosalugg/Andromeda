import Clothes from '@/models/Clothes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

const initialState: RootState['cart'] = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<{ item: Clothes; quantity: 1 | -1 }>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.item.id);

      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;

        if (state.items[index].quantity === 0) {
          state.items.splice(index, 1);
        }
      } else if (action.payload.quantity === 1) {
        state.items.push({ ...action.payload.item, quantity: 1 });
      }
    },
  },
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;
