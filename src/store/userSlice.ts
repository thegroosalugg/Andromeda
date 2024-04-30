import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { RootState } from './types';

const initialState: RootState['users'] = { users: [], user: null };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      state.user = action.payload;
    },
    setUser: (state, action: PayloadAction<{ email: string }>) => {
      const user = state.users.find((user: User) => user.email === action.payload.email);
      if (user) {
        state.user = user;
      }
    },
    logout: (state) => {
      state.user = null;
    },
    addBooking: (state, action: PayloadAction<{ user: User; booking: Booking }>) => {
      const user = state.users.find((user: User) => user.id === action.payload.user.id);
      if (user) {
        user.bookings.push(action.payload.booking);
        state.user = user;
      }
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
