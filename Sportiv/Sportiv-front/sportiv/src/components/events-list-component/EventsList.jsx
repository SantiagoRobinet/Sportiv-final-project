import React, { useState, useEffect } from "react";
import eventStore from "../../stores/eventStore";
import { loadEvents } from "../../actions/EventDetailAction";
import "./EventsList.scss";
import EventItem from "../event-item-component/EventItemComponent";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../footer-component/FooterComponent";

function EventsList() {
  const { user } = useAuth0();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventStore.addChangeListener(onChange);
    if (events.length === 0) loadEvents();
    return () => {
      eventStore.removeChangeListener(onChange);
    };
  }, [events.length, user]);

  function onChange() {
    setEvents(eventStore.getEvents());
  }

  return (
    <>
      <div className="banner__container">
        <img
          src="https://www.coe.int/documents/24916852/0/Supporters3.jpg/63b405d6-be6d-d2ec-bd11-0f03c6ca8130?t=1503553460000"
          alt=""
        />
        {user &&
        <NavLink className="create-event-button" to="event-form">
          + EVENT
        </NavLink>
        }
        <div className="banner__container-title">
          <h1>EVENTS</h1>
        </div>
      </div>
      <ul className="main__ul__container">
        {events.map((event) => (
          <li key={event._id}>
            <EventItem id={event._id} />
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default EventsList;
