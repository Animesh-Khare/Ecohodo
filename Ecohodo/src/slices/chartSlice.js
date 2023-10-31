import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  historicData: {},
  currentData: {},
};

export const chartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getHistoricData: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.historicData = action.payload;
    },
    getCurrentData: (state, action) => {
      state.currentData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getHistoricData, getCurrentData } = chartSlice.actions;

export default chartSlice.reducer;
