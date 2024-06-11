import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input) {
      setError("Please add your todo");
      return;
    }
    dispatch(addTodo(input));
    setInput("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={addTodoHandler} style={{ height: "25vh" }}>
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
          Add Todo
        </button>
      </form>
      {error && (
        <div style={{ color: "red", fontSize: "large", fontWeight: "bold" }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default AddTodo;
