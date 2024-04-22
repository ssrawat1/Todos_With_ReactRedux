import React from "react";
import { useTodo } from "../contextTodo";

function TodoItems() {
  const [updateTodo, deletTodo, toggleComplete] = useTodo();
  return <div></div>;
}

export default TodoItems;
