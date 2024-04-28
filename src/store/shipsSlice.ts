import { createSlice } from '@reduxjs/toolkit';
import { spaceships } from '@/data/spaceships';

const shipData = () => {
  const ships = JSON.parse(localStorage.getItem('spaceships') || JSON.stringify(spaceships)); // serialize data
  localStorage.setItem('spaceships', JSON.stringify(ships));
  return ships;
};

const initialState = { ships: shipData() };

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {},
});

export default shipsSlice.reducer;
