import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({ // slice reducers ks bada version hai
  name: "todo",       // slices ke naaam hote hai
  initialState,       // her slices ka initial state v hoti hai
  reducers: {          // reducers me property and function aate hai
    addTodo: (state, action) => {       // addTodo me always do cheejo ka access milta hai state and action
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {   
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
 



