import React from "react";
import { useState, useEffect } from "react";
import "./EventDetail.css";
import eventStore from "../../stores/EventsStore";
import {
  loadEvents,
  deleteEvent,
  joinEvent,
} from "../../actions/EventDetailAction";
import { useAuth0 } from "@auth0/auth0-react";
import { loadUser } from "../../actions/userActions";
import userStore from "../../stores/UserStore";
import UpdateEventForm from "../forms-material-UI-components/UpdateEventFormComponent";

function EventDetail(props) {
  const { user, isAuthenticated } = useAuth0();

  const [events, setEvents] = useState(eventStore.getEvents());
  const [eventId, setEventId] = useState(props.match?.params?.eventId);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventFinish, setEventFinish] = useState("");
  const [eventParticipants, setEventParticipants] = useState("");
  const [eventPhoto, setPhoto] = useState("");
  const [eventCity, setCity] = useState("");
  const [eventStreet, setStreet] = useState("");

  const [isOwner, setIsOwner] = useState(false);
  const [updateForm, setUpdateForm] = useState(false);

  useEffect(() => {
    eventStore.addChangeListener(onChange);
    if (events.length === 0) {
      loadEvents();
    } else if (eventId) {
      const event = eventStore.getEventById(eventId);
      if (event) {
        setEventId(event._id);
        setEventTitle(event.title);
        setEventDate(event.date);
        setEventDescription(event.description);
        setEventStart(event.start);
        setEventFinish(event.finish);
        setEventParticipants(event.participants.length);
        setPhoto(event.photo);
        setCity(event.city);
        setStreet(event.street);
        (async function mongoUserLoad() {
          await loadUser(user?.sub);
          const mongoUser = userStore.getUser();
          if (user) {
            setIsOwner(
              mongoUser.createdEvents.some((element) => element === eventId)
            );
          }
        })();
      }
    } else {
    }
    return () => eventStore.removeChangeListener(onChange);
  }, [events.length, props.match.params.eventId, eventId, user]);

  function onChange() {
    setEvents(eventStore.getEvents());
  }

  function onDelete(event, eventId) {
    event.preventDefault();
    deleteEvent(eventId);
  }

  function onSubmit(event, eventId, user) {
    event.preventDefault();
    joinEvent(eventId, user);
  }

  function showForm(event) {
    event.preventDefault();
    if (updateForm) {
      setUpdateForm(false);
    } else {
      setUpdateForm(true);
    }
  }
  // function onUpdate(event, eventId ){
  //   event.preventDefault();
  //   updateEvent(eventId);
  // }

  return (
    <div className="desktop__container flex__column">
      <div className="title__container flex__row">
        <img src={eventPhoto} />
        <h2>{eventTitle}</h2>
      </div>
      <div className="main__container flex__column">
        <div className="desktop__container">
          <div>
            <RenderMap city={eventCity} street={eventStreet} />
          </div>
          <div className="description__container">
            <h2>Description</h2>
            <p>{eventDescription}</p>
          </div>

          <div className="info__container flex__row">
            <div className="start__section flex__row">
              <div className="start-flag">
                <img
                  src="https://image.flaticon.com/icons/svg/1505/1505471.svg"
                  alt=""
                />
              </div>
              <div className="start-time flex__column">
                <div>
                  <p>Start</p>
                </div>
                <div className="event-time">{eventStart}</div>
              </div>
            </div>

            <div className="flex__column">
              <div>
                <p>Date</p>
              </div>
              <div className="event-time">{eventDate}</div>
            </div>

            <div className="start__section flex__row">
              <div className="start-flag">
                <img
                  src="https://image.flaticon.com/icons/svg/1505/1505471.svg"
                  alt=""
                />
              </div>
              <div className="start-time flex__column">
                <div>
                  <p>Finish</p>
                </div>
                <div className="event-time">{eventFinish}</div>
              </div>
            </div>
          </div>
          <div className="inscription__container flex__row">
            {!isOwner && (
              <button
                className="inscription__button"
                onClick={(event) => onSubmit(event, eventId, user)}
              >
                I'm in!
              </button>
            )}
            {isOwner && (
              <>
                <button
                  className="inscription__button"
                  onClick={(event) => onDelete(event, eventId)}
                >
                  Delete
                </button>
                <button
                  className="inscription__button"
                  onClick={(event) => showForm(event)}
                >
                  Update
                </button>
              </>
            )}

            <div className="counter flex__row">
              <div>
                <span>
                  <img
                    src="https://www.flaticon.es/premium-icon/icons/svg/3249/3249789.svg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <p>
                  <span className="counter__number">{eventParticipants}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {updateForm && (
          <div>
            <UpdateEventForm
              title={eventTitle}
              date={eventDate}
              description={eventDescription}
              start={eventStart}
              finish={eventFinish}
              photo={eventPhoto}
              eventId={eventId}
            />
          </div>
        )}

        <div className="map__container">
          <img src="https://image.maps.api.here.com/mia/1.6/mapview?app_id=3xJ1xva7Ad7VOciLEIFp&app_code=C8F-OpOoyjeG8Ke_Ed7w8A&poitxs=16&poitxc=white&poifc=red&poi=%2041.3910524,2.180644900000061&t=0&z=15&nodot&h=370&w=600&i" />
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
