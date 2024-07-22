import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: ['sun', 'inner', 'ast', 'outer'],
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive(state, action) {
      state.components = [action.payload];
    },
    resetActive(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setActive, resetActive } = activeSlice.actions;
export default activeSlice.reducer;
