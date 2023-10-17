import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type TodoType = {
  id: number;
  title: string;
  done: boolean;
};
interface TodoState {
  items: TodoType[];
  item: TodoType;
}

const initialState: TodoState = {
  items: [
    { id: 1, title: "first task", done: false },
    { id: 2, title: "pip", done: false },
  ],
  item: { id: 0, title: "", done: false },
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    Add: (state, action: PayloadAction<TodoType>) => {
      state.items.push(action.payload);
    },
    Delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    Toggle: (state, action: PayloadAction<number>) => {
      // @ts-ignore
      const toggleTodo: TodoType = state.items.find(
        (todo) => todo.id === action.payload,
      );
      toggleTodo.done = !toggleTodo.done;
    },
    Update: (state, action: PayloadAction<TodoType>) => {
      const updateTodo = state.items.find(
        (todo) => todo.id === action.payload.id,
      );
      // @ts-ignore
      updateTodo.title = action.payload.title;
    },
    AllComplected: (state) => {
      state.items = state.items.filter((item) => item.done === true);
    },
  },
});

export const { Add, Delete, AllComplected, Update, Toggle } = TodoSlice.actions;

export default TodoSlice.reducer;
