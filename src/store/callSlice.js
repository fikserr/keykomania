import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const callSlice = createSlice({
  name: 'call',
  initialState: {
    callID: null,
    vieverCallId: null,
    vieverToken: null,
  },
  reducers: {
    generateCallId: (state) => {
      state.callID = `livestream_${uuidv4()}`;
      state.vieverCallId = state.callID
    },
  },
});

export const { generateCallId, getTokenUsers} = callSlice.actions; 
export default callSlice.reducer;
