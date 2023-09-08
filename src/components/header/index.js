import React, { Component } from 'react'
import "./header.scss";
import {NavLink} from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
       <nav className='container'>
          <NavLink className="link" to="/" >Home</NavLink>
          <NavLink className="link" to="/business" >Business</NavLink>
          <NavLink className="link" to="/entertainment" >Entertainment</NavLink>
          <NavLink className="link" to="/general" >General</NavLink>
          <NavLink className="link" to="/health" >Health</NavLink>
          <NavLink className="link" to="/science" >Science</NavLink>
          <NavLink className="link" to="/sports" >Sports</NavLink>
          <NavLink className="link" to="/technology" >Technology</NavLink>
       </nav>
      </header>
    )
  }
}

export default Header