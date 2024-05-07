import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, item: {} },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
    saveItem(state, action) {
      state.item = action.payload
    }
  },
});

export const { toggle, saveItem } = modalSlice.actions;
export default modalSlice.reducer;
