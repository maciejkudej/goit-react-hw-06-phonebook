import { createSlice } from '@reduxjs/toolkit';
import { defaultItem } from 'utils/DefaultItem';

export const myContactSlice = createSlice({
  name: 'contacts',
  initialState: defaultItem,
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, remove } = myContactSlice.actions;
