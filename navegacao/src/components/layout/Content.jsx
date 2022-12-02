import "./Content.css";
import { Routes, Route } from "react-router-dom";
import About from "../../views/exemples/About";
import Home from "../../views/exemples/Home";
import React from "react";
export default (props) => {
  return (
    <div className="content">
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/sobre" element={<About />}/>
      </Routes>
      
    </div>
  );
};
