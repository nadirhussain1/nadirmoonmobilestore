import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {User} from '../types';

const initialState: User = {
  firstName: 'Nadir',
  lastName: '',
  email: 'nad@gmail.com',
};

// name given in createSlice is later used to access state of this slice from store.

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<User>) => {
      console.log('Inside updateProfile reducer in profileSlice.ts');
      return action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      return {...state, email: action.payload};
    },
  },
});

// Action creators are generated automatically
export const {updateProfile, updateEmail} = profileSlice.actions;

// We export the reducer function so that it can be added to the store
export default profileSlice.reducer;
