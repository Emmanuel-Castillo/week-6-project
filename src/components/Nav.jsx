import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

export const Nav = () => {
  return (
    <nav>
      <figure>
        <img src={logo} alt="" id="nav__logo--img"/>
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <Link to={'/'} className="nav__link--anchor">Home</Link>
        </li>
        <li className="nav__link">
          <Link to={'/'} className="nav__link--anchor">Find Your Movie</Link>
        </li>
        <li className="nav__link">
          <Link to={'/'} className="nav__link--anchor">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
