import React from "react";
import Login from "./Login";

let isLoggedIn = false

const currentTime = new Date(2019, 11, 1, 13).getHours()

function App() {
  return <div className="container">
    {
      // isLoggedIn ? <h1>Hello World</h1> : <Login />
      currentTime > 12 && currentTime < 18 ? <h1>Why are u still working</h1> : null
    }
  </div>

}

export default App;
