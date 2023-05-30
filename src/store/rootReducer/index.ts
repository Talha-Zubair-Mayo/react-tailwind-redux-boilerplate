import persistedReducer from "../counterSlice";

const rootReducer = {
  counter: persistedReducer,
};
export default rootReducer;
