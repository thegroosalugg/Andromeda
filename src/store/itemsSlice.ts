import { createSlice } from '@reduxjs/toolkit';
import { spaceships } from '@/data/spaceships';
import { catalogue } from '@/data/clothes';

const ships = JSON.parse(JSON.stringify(spaceships))
const clothes = JSON.parse(JSON.stringify(catalogue))

const itemsSlice = createSlice({
  name: 'items',
  initialState: { ships, clothes },
  reducers: {},
});

export default itemsSlice.reducer;
