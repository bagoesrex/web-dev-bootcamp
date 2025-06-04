import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/heading'
import phi, { doublePhi, triplePhi } from './math'

function App() {
  return (
    <>
      <Heading />
      <ul>
        <li>{doublePhi()}</li>
        <li>{triplePhi()}</li>
      </ul>
    </>
  )
}

export default App
