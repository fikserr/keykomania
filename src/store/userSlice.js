import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  name: localStorage.getItem('nameData') ? JSON.parse(localStorage.getItem('nameData')) : '', // localStorage'dan olingan qiymat
  error: null
};

// Slice
const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setName: (state, action) => {
      // Agar PhoneNumber bo'sh bo'lsa, errorni true qilamiz
      if (action.payload.PhoneNumber.trim() === "") {
        state.error = true;
      } else {
        state.error = false;
        state.name = action.payload; // name'ni yangilaymiz
        localStorage.setItem('nameData', JSON.stringify(action.payload)); // localStorage'ga saqlash
      }
    },
    clearName: (state) => {
      state.name = '';
      localStorage.removeItem('nameData'); // localStorage'dan o'chirish
    },
  },
});

// Actions
export const { setName, clearName } = userSlice.actions;

// Reducer
export default userSlice.reducer;
