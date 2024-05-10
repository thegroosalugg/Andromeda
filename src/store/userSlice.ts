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
      const user = state.users.find((user: User) => user.email.toLowerCase() === action.payload.email.toLowerCase());
      if (user) {
        state.user = user;
      }
    },
    updateUser(state, action: PayloadAction<User>) {
      const updatedUser = { ...state.user, ...action.payload };
      state.user = updatedUser;
      state.users = state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
    },
    logout: (state) => {
      state.user = null;
    },
    addBooking: (state, action: PayloadAction<{ currentUser: User; booking: Booking }>) => {
      const user = state.users.find((user: User) => user.id === action.payload.currentUser.id);
      if (user) {
        user.bookings.push(action.payload.booking);
        state.user = user;
      }
    },
    updateBooking: (state, action: PayloadAction<{ userId: string; bookingId: string, data: Booking }>) => {
      const user = state.users.find((user: User) => user.id === action.payload.userId);
      if (user) {
        const booking = user.bookings.find(
          (booking: Booking) => booking.id === action.payload.bookingId
        );
        if (booking) {
          Object.assign(booking, action.payload.data);
          state.user = user;
        }
      }
    },
    deleteBooking: (state, action: PayloadAction<{ userId: string; bookingId: string }>) => {
      const user = state.users.find((user: User) => user.id === action.payload.userId);
      if (user) {
        user.bookings = user.bookings.filter(
          (booking: Booking) => booking.id !== action.payload.bookingId
        );
        state.user = user;
      }
    },
  },
});

export const { addUser, setUser, updateUser, logout, addBooking, updateBooking, deleteBooking } = userSlice.actions;
export default userSlice.reducer;
