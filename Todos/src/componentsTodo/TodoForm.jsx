import React, { useState } from "react";
import { useTodo } from "../contextTodo";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return
    addTodo({ todo, complete: false });
    setTodo('')
  };

  return (
    <>
      <form action="" onSubmit={add}>
      <input type="text" placeholder="Write Todo..." value = {todo} onChange={(e) => setTodo(e.target.value)}/>
      <button type="submit">Add Todo</button>
      </form>
    </>
  );
}

export default TodoForm;
