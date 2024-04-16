import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { modal: false },
  reducers: {
    toggle(state) {
      state.modal = !state.modal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
