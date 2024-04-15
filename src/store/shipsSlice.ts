import { createSlice } from "@reduxjs/toolkit";

const initialState = { ships: [] }

const shipsSlice = createSlice({
  name: 'ships',
  initialState,
  reducers: {} // will be used for managing favourites and bookings later
})

export default shipsSlice.reducer;
