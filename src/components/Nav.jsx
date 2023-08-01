import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <figure>
        <img src={logo} alt="" id="nav__logo--img" />
      </figure>
      <ul className="nav__link--list">
        <Link to={"/"} className="nav__link--anchor">
          <li className="nav__link">Home</li>
        </Link>
        <Link to={"/"} className="nav__link--anchor">
          <li className="nav__link">Find Your Movie</li>
        </Link>
        <Link to={"/"} className="nav__link--anchor">
          <li className="nav__link">Contact</li>
        </Link>
        
      </ul>
    </nav>
  );
};
