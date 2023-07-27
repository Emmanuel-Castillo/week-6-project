import React from "react";
import logo from "../assets/logo.png";
import {Link} from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__content">
            <img src={logo} alt="" id="footer__logo--img" />
            <ul className="footer__links">
              <li className="footer__link">
              <Link to={'/'} className="footer__link--anchor">Home</Link>
              </li>
              <li className="footer__link">
              <Link to={'/'} className="footer__link--anchor">Find your Movie</Link>
              </li>
              <li className="footer__link">
              <Link to={'/'} className="footer__link--anchor">Contact</Link>
              </li>
            </ul>
            <p className="copyright">Copyright &copy; 2023 Emmanuel Castillo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
