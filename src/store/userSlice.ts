import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '@/models/User';
import { RootState } from './types';

const initialState: RootState['user'] = { users: [], user: null };

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
