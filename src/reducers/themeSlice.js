import { createSlice } from "@reduxjs/toolkit";
import defaultState from "./defaultState";

const themeSlice = createSlice({
  name: "theme",
  initialState: defaultState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload;
    },
  },
});

export default themeSlice.reducer;
