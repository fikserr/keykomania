import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for fetching user data
export const getDataUser = createAsyncThunk('data/getData', async (path) => {
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

    // If the request was successful, return the data (token)
    if (response.ok) {
      const data = await response.json();
      return data.token;  // Make sure to return the token
    } else {
      throw new Error("Failed to fetch token");
    }
  } catch (error) {
    console.error("Xatolik:", error);
    throw error;  // This will be caught in the rejected case
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
        // On success, store the token in the state
        state.tokenApiUser = action.payload;
      })
      .addCase(getDataUser.rejected, (state, action) => {
        // On failure, store the error message
        state.errorUser = action.error.message;
      });
  },
});

export default getUserToken.reducer;
