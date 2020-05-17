import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "gameBoard",
  initialState: [],
  reducers: {
    setGameOnScoreBoard: (state, action) => {
      return [...state, { ...action.payload }];
    },
  },
});

export default slice;
