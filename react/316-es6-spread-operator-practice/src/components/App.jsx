import React from "react";
import List from "./List";
import { useState } from "react";

function App() {
  const [tempValue, setTempValue] = useState("")
  const [todos, setTodos] = useState([])

  function handleInput(event) {
    let inputValue = event.target.value
    setTempValue(inputValue);
  }

  function handleClick() {
    setTodos(prevItems => {
      return [...prevItems, tempValue]
    })
    setTempValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} value={tempValue} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => <List item={todo} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
