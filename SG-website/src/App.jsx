// import { useState } from 'react'
// import React from "react";
import "./App.css";
import "./components/Header.css";
import "./components/Nav.css";
import Nav from "./components/Nav"
import Header from "./components/Header"
import Welcome from "./components/Welcome"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <div className="Nav">
        <Nav/>
      </div>
      <div>
        <Header/>
      </div>
      <div>
        <Welcome/>
      </div>
    </div>
  )
}

export default App
