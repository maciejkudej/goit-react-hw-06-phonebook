import { configureStore } from '@reduxjs/toolkit';
import { myContactSlice } from './myContactSlice';
import { myFilterSlice } from './myFilterSlice';

export const store = configureStore({
  reducer: {
    contacts: myContactSlice.reducer,
    filter: myFilterSlice.reducer,
  },
});
