import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  // const [red, green, blue] = [9, 28, 123]

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    (count > 0 ? setCount(count - 1) : null)
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default App;
