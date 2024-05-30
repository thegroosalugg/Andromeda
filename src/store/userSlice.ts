import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '@/models/User';
import Booking from '@/models/Booking';
import { RootState } from './types';
import Order from '@/models/Order';

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
    deleteUser(state, action) {
      state.user = null;
      state.users = state.users.filter((user: User) => user.id !== action.payload);
    },
    addBooking: (state, action: PayloadAction<{ currentUser: User; booking: Booking }>) => {
      const user = state.users.find((user: User) => user.id === action.payload.currentUser.id);
      if (user) {
        user.bookings.push(action.payload.booking);
        user.bookings.sort((a: Booking, b: Booking) => new Date(a.from).getTime() - new Date(b.from).getTime());
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
          user.bookings.sort((a: Booking, b: Booking) => new Date(a.from).getTime() - new Date(b.from).getTime());
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
    addOrder: (state, action: PayloadAction<{ userId: string, order: Order}>) => {
      const user = state.users.find((user: User) => user.id === action.payload.userId);
      if (user) {
        user.orders.push(action.payload.order);
        state.user = user;
      }
    },
  },
});

export const { addUser, setUser, updateUser, logout, deleteUser, addBooking, updateBooking, deleteBooking, addOrder } = userSlice.actions;
export default userSlice.reducer;
