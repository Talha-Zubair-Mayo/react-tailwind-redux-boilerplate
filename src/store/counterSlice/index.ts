// counterSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Define the state interface
interface CounterState {
  value: number;
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
};

// Create the slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Define the persist config
const persistConfig = {
  key: "counter",
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, counterSlice.reducer);

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the persisted reducer as the default export
export default persistedReducer;
