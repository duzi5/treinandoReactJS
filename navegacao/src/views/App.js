
import React from "react"
import Menu from "../components/layout/Menu.jsx"
import Content from "../components/layout/Content.jsx"
import "./App.css"
import { BrowserRouter as Router } from  'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
          <Menu />
          <Content />  
      </Router>
    </div>
  );
}

export default App;
