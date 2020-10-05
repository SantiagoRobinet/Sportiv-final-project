import React from "react";
import "./FooterComponent.scss";
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


function Footer() {

  const { isAuthenticated, loginWithRedirect, logoutWithRedirect, user } = useAuth0();

  return (
    <footer className="footer__main">
      <div className="footer__left">
        <div>By Santiago Robinet</div>
        </div>
      <div className="footer__right">
       <img className="skylab-logo" src="https://www.skylabcoders.com/images/403/default.png" alt="skylab-icon"/>
      </div>
    </footer>
  );
}

export default Footer;
