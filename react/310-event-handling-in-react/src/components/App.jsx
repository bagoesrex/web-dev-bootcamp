import React, { useState } from "react";
import { use } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello")
  const [isMouseOver, setMouseOver] = useState(false)

  function handleClick() {
    setHeadingText("Clicked")
  }

  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: isMouseOver ? "black" : null }} onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>Submit</button>
    </div >
  );
}

export default App;
