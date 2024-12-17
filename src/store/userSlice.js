import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  name: localStorage.getItem('nameData') ? JSON.parse(localStorage.getItem('nameData')) : '', 
  error: null
};

// Slice
const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setName: (state, action) => {

      if (action.payload.PhoneNumber.trim() === "") {
        state.error = true;
      } else {
        state.error = false;
        state.name = action.payload; // name'ni yangilaymiz
        localStorage.setItem('nameData', JSON.stringify(action.payload));
      }
    },
    clearName: (state) => {
      state.name = '';
      localStorage.removeItem('nameData'); 
    },
  },
});


export const { setName, clearName } = userSlice.actions;


export default userSlice.reducer;
