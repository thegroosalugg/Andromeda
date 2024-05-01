import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './types';
import { FormData } from '@/models/FormData';

function emptyForm(): FormData {
  return {
       name: '',
    surname: '',
      email: '',
      phone: '',
       from: '',
       till: '',
     pickup: '',
    dropoff: '',
  };
}

const initialState: RootState['form'] = {
  data: emptyForm(),
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
      state.data = emptyForm();
      state.errors = {};
    },
  },
});

export const { updateData, clearForm, setErrors } = formSlice.actions;
export default formSlice.reducer;
