import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './types';
import { FormData } from '@/models/FormData';

const initialState: RootState['form'] = {
  data: {
    name: '',
 surname: '',
   email: '',
   phone: '',
  street: '',
    city: '',
postcode: '',
 country: '',
    from: '',
    till: '',
  pickup: '',
 dropoff: '',
   price: '',
   login: '',
},
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateData(state, action: PayloadAction<{ id: keyof FormData; value: string }>) {
      const { id, value } = action.payload;
      state.data[id] = value;
    },
    setErrors(state, action) {
      state.errors = action.payload;
    },
    clearForm(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { updateData, clearForm, setErrors } = formSlice.actions;
export default formSlice.reducer;
