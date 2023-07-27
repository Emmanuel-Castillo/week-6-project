import React from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer__content">
            <img src={logo} alt="" id="footer__logo--img" />
            <ul className="footer__links">
              <li className="footer__link">
                <a href="" className="footer__link--anchor">
                  Home
                </a>
              </li>
              <li className="footer__link">
                <a href="" className="footer__link--anchor">
                  Find your Movie
                </a>
              </li>
              <li className="footer__link">
                <a href="" className="footer__link--anchor">
                  Contact
                </a>
              </li>
            </ul>
            <p className="copyright">Copyright &copy; 2023 Emmanuel Castillo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
