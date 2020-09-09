import React from "react";
import { useState, useEffect } from "react";
import "./GroupDetailComponent.scss";
import eventStore from "../../stores/GroupStore";
import { loadGroups } from "../../actions/GroupActions"; 
import groupStore from "../../stores/GroupStore";

function GroupDetail(props) {

  const [groups, setGroups] = useState(groupStore.getGroups());
  const [eventId, setGroupId] = useState(props.match?.params?.eventId);
  const [eventTitle, setGroupTitle] = useState("");
  const [eventDate, setGroupDate] = useState("");
  const [eventDescription, setGroupDescription] = useState("");
  const [eventStart, setGroupStart] = useState("");
  const [eventFinish, setGroupFinish] = useState("");
  const [eventParticipants, setGroupParticipants] = useState("");
  const [eventLevel, setGroupLevel] = useState("");
  const [eventPhoto, setPhoto] = useState("");

  useEffect(() => {
    eventStore.addChangeListener(onChange);
    if (events.length === 0) {
      loadGroups();
    } else if (eventId) {
      const event = eventStore.getGroupById(eventId);
      if (event) {
        setGroupId(event._id);
        setGroupTitle(event.title);
        setGroupDate(event.date);
        setGroupDescription(event.description);
        setGroupStart(event.start);
        setGroupFinish(event.finish);
        setGroupParticipants(event.participants);
        setGroupLevel(event.level);
        setPhoto(event.photo)
      }
    } else {
    }
    return () => eventStore.removeChangeListener(onChange);
  }, [events.length, props.match.params.eventId, eventId]);

  function onChange() {
    setGroups(eventStore.getGroups());
  }

  return (
    <div className="desktop__container flex__column">
      <div className="title__container flex__row">
        <img src={eventPhoto} />
        <h2>{eventTitle}</h2>
      </div>
      <div className="main__container flex__column">
        <div className="desktop__container">
        <div className="description__container">
          <h2>Description</h2>
          <p>{eventDescription}</p>
        </div>

          <div className="info__container flex__row">
            <div className="start__section flex__row">
              <div className="start-flag">
                  <img src="https://image.flaticon.com/icons/svg/1505/1505471.svg" alt=""/>
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
                  <img src="https://image.flaticon.com/icons/svg/1505/1505471.svg" alt=""/>
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
          <div className="flex__column">
                  <div>
                      <p>Level</p>
                  </div>
                  <div >{eventLevel}</div>

              </div>
            <button className="inscription__button">I'm in!</button>

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

        <div className="map__container">
          <img src="https://image.maps.api.here.com/mia/1.6/mapview?app_id=3xJ1xva7Ad7VOciLEIFp&app_code=C8F-OpOoyjeG8Ke_Ed7w8A&poitxs=16&poitxc=white&poifc=red&poi=%2041.3910524,2.180644900000061&t=0&z=15&nodot&h=370&w=600&i" />
        </div>
      </div>
    </div>
  );
}

export default GroupDetail;
