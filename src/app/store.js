import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { saveState } from "./localStorage";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

store.subscribe(() => saveState(store.getState().app));

export default store;
