import React, { useState, useEffect } from "react";
import eventStore from "../../stores/EventsStore";
import { loadEvents } from "../../actions/EventDetailAction";
import './EventsList.css'
import EventItem from "../event-item-component/EventItemComponent";

function Header() {
  return(
      <nav className="nav__main">
          <div>
            <div className="other-pages"></div>
            <div className="search"></div>
          </div>
          <div>
            <div className="logo">LOGO</div>
          </div>
          
      </nav>
  )
}

export default Header;
