import { createSlice } from '@reduxjs/toolkit';
import { spaceships } from '@/data/spaceships';

const ships = JSON.parse(JSON.stringify(spaceships))

const shipsSlice = createSlice({
  name: 'ships',
  initialState: { ships },
  reducers: {},
});

export default shipsSlice.reducer;
