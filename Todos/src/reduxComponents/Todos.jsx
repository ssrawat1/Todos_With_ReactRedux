import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              backgroundColor: "#1414",
              listStyle: "none",
              width: "50%",
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "large",
              margin: "2px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ marginLeft: "10px" }}>{todo.text}</span>

            <button
              style={{
                margin: "10px",
                backgroundColor: "#135",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                border: "0.5px solid gray",
              }}
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Remove Todo
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Todos;
