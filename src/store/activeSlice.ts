import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  components: ['TheSun', 'InnerPlanets', 'Asteroids', 'OuterPlanets'],
};

const activeSlice = createSlice({
  name: 'active',
  initialState,
  reducers: {
    setActive(state, action) {
      state.components = [action.payload]
    }
  },
});

export const { setActive } = activeSlice.actions;
export default activeSlice.reducer;
