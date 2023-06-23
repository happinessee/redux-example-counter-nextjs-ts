"use client"

import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
