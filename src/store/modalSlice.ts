import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, item: null },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    saveItem(state, action) {
      state.item = action.payload
    },
    updateItem(state, action) {
      if (typeof state.item === 'object' && state.item !== null) {
        const { key, data } = action.payload;
        state.item = {
          ...state.item as object,
          [key]: { ...state.item[key] as object, ...data }
        };
      }
    }
  },
});

export const { toggle, saveItem, updateItem } = modalSlice.actions;
export default modalSlice.reducer;
