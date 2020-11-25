import React from "react";
import {AppRoute} from "../../store/const";

const Footer = () => {
  return (
    <footer className="footer">
      <a className="footer__logo-link" href={`${AppRoute.ROOT}`}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  );
};

export default Footer;
