import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./slices/TodoSlice";

export const store = configureStore({
  reducer: {
    TodoSlice: TodoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
