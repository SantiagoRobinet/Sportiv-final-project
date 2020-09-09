import React from "react";
import "./HeaderComponent.css";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SimpleMenu from "../desplegable-menu-component/DesplegableMenu";

function Header() {
  const {
    isAuthenticated,
    loginWithRedirect,
    logoutWithRedirect,
    user,
  } = useAuth0();

  return (
    <nav className="nav__main">
      <div className="nav__left">
        <div className="page__links">
          <div>
            <NavLink className="nav-page" to="/events">
              EVENTS
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-page" to="/groups">
              GROUPS
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-page" to="/events">
              CLASSES
            </NavLink>
          </div>
        </div>
        <div className="nav-burger nav-icon">
          <img
            src="https://trello-attachments.s3.amazonaws.com/5f4919754c61df879cbc5ac7/512x512/85b2cd262adb884177e16063285efe99/menu.png"
            alt="hamburguer-button"
          />
        </div>
        {/* <div className="nav-search nav-icon"><NavLink to="/search"><img src="https://image.flaticon.com/icons/svg/751/751463.svg" alt="hamburguer-button"/></NavLink></div> */}
      </div>
      <div className="nav-logo__center">
        <div className="nav-logo">
          <NavLink to="/">LOGO</NavLink>
        </div>
      </div>
      <div className="nav__right">
        <div className="nav-explore nav-icon">
          <NavLink to="">
            <img
              src="https://trello-attachments.s3.amazonaws.com/5f49077bed9e41726a6d5d2f/5f4919754c61df879cbc5ac7/20aa55b3605d5f7e5485e5ad620c2c83/ubicacion.svg"
              alt="explore-button"
            />
          </NavLink>
        </div>

        {isAuthenticated && <SimpleMenu />}
        {!isAuthenticated && (
          <div className="nav-user nav-icon">
            <NavLink to="" onClick={() => loginWithRedirect()}>
              <img
                src="https://trello-attachments.s3.amazonaws.com/5f49077bed9e41726a6d5d2f/5f4919754c61df879cbc5ac7/8887989c429433020441692c4a51dc86/iniciar-sesion.svg"
                alt="login-button"
              />
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
