import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) <div>"please Add your todo " </div>;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={addTodoHandler}
        style={{ backgorundColor: "olive", height: "25vh" }}
      >
        <input
          type="text"
          value={input}
          placeholder="Enter Your Todo Here"
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "12px",
            outline: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            backgroundColor: "darkgrey",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#1414",
            padding: "12px",
            cursor: "pointer",
            border: "none",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            color: "#fff",
          }}
        >
          Add Todos
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
