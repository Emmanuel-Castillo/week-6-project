import React from "react";
import logo from "../assets/logo.png";

export const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="footer__content">
            <img src={logo} alt="" id="footer__logo--img" />
            <ul class="footer__links">
              <li class="footer__link">
                <a href="" class="footer__link--anchor">
                  Home
                </a>
              </li>
              <li class="footer__link">
                <a href="" class="footer__link--anchor">
                  Find your Movie
                </a>
              </li>
              <li class="footer__link">
                <a href="" class="footer__link--anchor">
                  Contact
                </a>
              </li>
            </ul>
            <p class="copyright">Copyright &copy; 2023 Emmanuel Castillo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
