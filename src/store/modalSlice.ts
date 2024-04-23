import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false },
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
