import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLinkHeader } from "../../index.css";

function Header() {
  const style = { color: "white", margin: "5px" };
  const activeStyle = { color: "orange" };

  return (
    <nav className="bg-secondary p-2 mr-3 ">
      <NavLink exact to="/" style={style} activeStyle={activeStyle}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" style={style} activeStyle={activeStyle}>
        Course
      </NavLink>{" "}
      {" | "}
      <NavLink to="/authors" style={style} activeStyle={activeStyle}>
        Authors
      </NavLink>
      {" | "}
      <NavLink to="/about" style={style} activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
}

export default Header;
