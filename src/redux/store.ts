import { configureStore } from "@reduxjs/toolkit";
import { basket } from "./features/basket.slice";

export const store = configureStore({
  reducer: {
    basket: basket.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
