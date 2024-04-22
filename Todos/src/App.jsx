import React from "react";
import { Provider } from "react-redux";
import { store } from "./App/store";
import AddTodo from "./reduxComponents/AddTodo";
import Todos from "./reduxComponents/Todos";

function App() {
  return (
    <Provider store={store}> 
      <div className="todo-container" style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
        <h2>Redux Toolkit:</h2>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}
export default App;
