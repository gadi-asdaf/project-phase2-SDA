import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

/* to pass all 3 parameters in createSlice function */
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

/* to export addTodos from addTodoReducer */
export const {
  addTodos,
  removeTodos,
} = addTodoReducer.actions;

/* to export reducer from addTodoReducer */
export const reducer = addTodoReducer.reducer;