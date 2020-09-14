import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import { createEvent } from "../../actions/EventDetailAction";
import { useEffect } from "react";
import userStore from '../../stores/UserStore'
import {loadUser} from '../../actions/userActions'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      fontFamily: "Kufam",
    },
  },
}));

export default function UpdateEventForm({ title, date, description, start, finish, photo }) {
  const { user , isAuthenticated} = useAuth0();
  
  const [mongoUser, setMongoUser] = useState("");
  const [eventPhoto, setEventPhoto] = useState(null);
  const [eventTitle, setEventTitle] = useState(null);
  const [eventDescription, setEventDescription] = useState(null);
  const [eventStartTime, setEventStartTime] = useState(null);
  const [eventFinishTime, setEventFinishTime] = useState(null);
  const [eventDate, setEventDate] = useState(null);
  const [eventLocation, setEventLocation] = useState("La Plata");
  const [eventId, setEventId] = useState("5f5e1ad116cc813d30ddcbd7")

  const classes = useStyles();

  useEffect(() => {
    userStore.addChangeListener(onChange);

    if( isAuthenticated && !mongoUser){
      (async function asyncLoad(){
        await loadUser(user.sub);
        setMongoUser(userStore.getUser());
      }())
    }

    return () => userStore.removeChangeListener(onChange)
  })

  function onChange(){
    setMongoUser(userStore.getUser());
  }

  function onClickUpdateEvent(
    event,
    eventId,
    owner,
    photo,
    title,
    description,
    startTime,
    finishTime,
    date,
    location
  ) {
    event.preventDefault();
    // createEvent(
    //     eventId,
    //   owner,
    //   photo,
    //   title,
    //   description,
    //   startTime,
    //   finishTime,
    //   date,
    //   location
    // );
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-basic"
          label="Photo URL"
          value={eventPhoto || photo}
          error={eventPhoto === ''}
          onChange={(event) => {
            event.preventDefault();
            setEventPhoto(event.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Title"
          error={eventTitle === ''}
          value={eventTitle || title}
          onChange={(event) => {
            event.preventDefault();
            setEventTitle(event.target.value);
          }}
        />
        <TextField
          id="standard-textarea"
          label="Description"
          placeholder="Description here"
          value={eventDescription || description}
          error={eventDescription === ''}
          onChange={(event) => {
            event.preventDefault();
            setEventDescription(event.target.value);
          }}
          multiline
        />
        <TextField
          required
          id="standard-basic"
          label="Location"
          value={eventLocation}
          error={eventLocation === ''}
          onChange={(event) => {
            event.preventDefault();
            setEventLocation(event.target.value);
          }}
        />
        <TextField
          required
          value={eventDate || date}
          onChange={(event) => setEventDate(event.target.value)}
          id="date"
          label="Date"
          type="date"
          defaultValue={eventDate}
          className={classes.textField}
          error={eventDate === ''}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          value={eventStartTime || start}
          onChange={(event) => setEventStartTime(event.target.value)}
          id="time"
          label="Start Time"
          type="time"
          className={classes.textField}
          error={eventStartTime === ''}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          required
          value={eventFinishTime || finish}
          onChange={(event) => setEventFinishTime(event.target.value)}
          id="time"
          label="Finish Time"
          type="time"
          className={classes.textField}
          error={eventFinishTime === ''}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <button
          className="create-form-button"
          onClick={(event) =>
            onClickUpdateEvent(
              event,
              eventId,
              mongoUser?._id,
              eventPhoto,
              eventTitle,
              eventDescription,
              eventStartTime,
              eventFinishTime,
              eventDate,
              eventLocation
            )
          }
        >
          UPDATE EVENT
        </button>
      </form>
    </>
  );
}
