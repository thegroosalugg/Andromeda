import { createSlice } from '@reduxjs/toolkit';
import { spaceships } from '../assets/spaceships/spaceships';

const shipData = () => {
  const ships = JSON.parse(localStorage.getItem('spaceships') || JSON.stringify(spaceships));
  localStorage.setItem('spaceships', JSON.stringify(ships));
  return ships;
};

const initialState = { ships: shipData() };

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {}, // will be used for managing favourites and bookings later
});

export default shipsSlice.reducer;
