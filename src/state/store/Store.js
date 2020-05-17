import { GameBoard, ScoreBoard } from "../slices";
import { persistReducer, persistStore } from "redux-persist";

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const gameBoardReducer = GameBoard.reducer;
const scoreBoardReducer = ScoreBoard.reducer;

const combinedReducers = combineReducers({
  gameBoard: gameBoardReducer,
  scoreBoard: scoreBoardReducer,
});

const persistConfiguration = {
  key: "root",
  version: 1,
  storage: storage,
};

const persistedReducer = persistReducer(persistConfiguration, combinedReducers);

const Store = configureStore({
  reducer: persistedReducer,
  middleware: [logger, thunk],
});

const Persistor = persistStore(Store);

export { Store, Persistor };
