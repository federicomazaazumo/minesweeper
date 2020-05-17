import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "gameBoard",
  initialState: {
    boardBombs: 0,
    boardHeight: 0,
    boardWidth: 0,
    playerNickname: "",
  },
  reducers: {
    defineGameBoard: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default slice;
