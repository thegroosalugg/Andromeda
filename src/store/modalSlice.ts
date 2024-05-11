import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './types';

const initialState: RootState['modal'] = { isOpen: false, item: null };

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    saveItem(state, action) {
      state.item = action.payload;
    },
    updateItem(state, action) {
      if (typeof state.item === 'object' && state.item !== null) {
        const { key, data } = action.payload;
        state.item = {
          ...state.item,
          [key]: { ...(state.item[key] as object), ...data },
        };
      }
    },
  },
});

export const { toggle, saveItem, updateItem } = modalSlice.actions;
export default modalSlice.reducer;
