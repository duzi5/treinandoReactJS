import "./Menu.css"
import React from "react"
import { Link } from "react-router-dom"


export default props => { 
    return (
        <>
        <div className="menu">
          <Link className="btn" to="/">Home</Link>
          <Link className="btn" to="/sobre">Sobre</Link>         ""
        </div>
        </>
    )
}