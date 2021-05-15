import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { List } from "./components/List"

function App() {
  cosnt[(tab, setTab)] = useState("List")

  return (
    <div>
      <header>
        <nav>リスト</nav>
        <nav>フォーム</nav>
      </header>
      <hr></hr>

      <List />
    </div>
  )
}

export default App
