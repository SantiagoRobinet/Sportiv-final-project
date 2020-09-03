import React from "react";
import "./HeaderComponent.css";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="nav__main">
      <div className="nav__left">
        <div className="nav-other-pages nav-icon"><img src="https://image.flaticon.com/icons/svg/2099/2099043.svg" alt="hamburguer-button"/></div>
        <div className="nav-search nav-icon"><Link to="/search"><img src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="hamburguer-button"/></Link></div>
      </div>
      <div className="nav-logo__center">
        <div className="nav-logo"><Link to="/">LOGO</Link></div>
      </div>
      <div className="nav__right">
        <div className="nav-explore nav-icon"><Link to="/explore"><img src="https://image.flaticon.com/icons/svg/684/684908.svg" alt="hamburguer-button"/></Link></div>
        <div className="nav-user nav-icon"><Link to="/login"><img src="https://image.flaticon.com/icons/svg/3014/3014241.svg" alt="hamburguer-button"/></Link></div>
      </div>
    </nav>
  );
}

export default Header;
