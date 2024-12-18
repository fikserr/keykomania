import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataUser = createAsyncThunk('data/getData', async (path) => {
  console.log(path);
  
  if (path.trim() !== "") {
    try {
      const response = await fetch("https://keykomania-server.onrender.com/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: path,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data.token;  
      } else {
        throw new Error("Failed to fetch token");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      throw error; 
    }
  }
});

const initialState = {
  tokenApiUser: null,
  errorUser: null,
};

const getUserToken = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataUser.fulfilled, (state, action) => {

        state.tokenApiUser = action.payload;
      })
      .addCase(getDataUser.rejected, (state, action) => {

        state.errorUser = action.error.message;
      });
  },
});

export default getUserToken.reducer;
