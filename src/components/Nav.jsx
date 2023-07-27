import React from 'react'
import logo from '../assets/logo.png'

export const Nav = () => {
  return (
    <nav>
      <figure>
        <img src={logo} alt="" id="nav__logo--img"/>
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a href="" className="nav__link--anchor">Home</a>
        </li>
        <li className="nav__link">
          <a href="" className="nav__link--anchor">Find your Movie</a>
        </li>
        <li className="nav__link">
          <a href="" className="nav__link--anchor">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
