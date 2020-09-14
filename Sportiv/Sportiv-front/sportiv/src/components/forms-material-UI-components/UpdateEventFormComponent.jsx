import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import { updateEvent } from "../../actions/EventDetailAction";
import { useEffect } from "react";
import userStore from "../../stores/UserStore";
import { loadUser } from "../../actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      fontFamily: "Kufam",
    },
  },
}));

export default function UpdateEventForm({
  title,
  date,
  description,
  start,
  finish,
  photo,
  eventId
}) {
  const { user, isAuthenticated } = useAuth0();

  const [mongoUser, setMongoUser] = useState("");
  const [eventPhoto, setEventPhoto] = useState(photo);
  const [eventTitle, setEventTitle] = useState(title);
  const [eventDescription, setEventDescription] = useState(description);
  const [eventStartTime, setEventStartTime] = useState(start);
  const [eventFinishTime, setEventFinishTime] = useState(finish);
  const [eventDate, setEventDate] = useState(date);
  const [eventLocation, setEventLocation] = useState("La Plata");

  const classes = useStyles();

  useEffect(() => {
    userStore.addChangeListener(onChange);

    if (isAuthenticated && !mongoUser) {
      (async function asyncLoad() {
        await loadUser(user.sub);
        setMongoUser(userStore.getUser());
      })();
    }

    return () => userStore.removeChangeListener(onChange);
  });

  function onChange() {
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
    console.log(eventId)
    updateEvent(
      eventId,
      owner,
      photo,
      title,
      description,
      startTime,
      finishTime,
      date,
      location
    );
  }

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-basic"
          label="Photo URL"
          value={eventPhoto}
          error={eventPhoto === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventPhoto(event.target.value);
          }}
        />
        <TextField
          required
          id="standard-basic"
          label="Title"
          error={eventTitle === ""}
          value={eventTitle}
          onChange={(event) => {
            event.preventDefault();
            setEventTitle(event.target.value);
          }}
        />
        <TextField
          id="standard-textarea"
          label="Description"
          placeholder="Description here"
          value={eventDescription}
          error={eventDescription === ""}
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
          error={eventLocation === ""}
          onChange={(event) => {
            event.preventDefault();
            setEventLocation(event.target.value);
          }}
        />
        <TextField
          required
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
          id="date"
          label="Date"
          type="date"
          className={classes.textField}
          error={eventDate === ""}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          value={eventStartTime}
          onChange={(event) => setEventStartTime(event.target.value)}
          id="time"
          label="Start Time"
          type="time"
          className={classes.textField}
          error={eventStartTime === ""}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <TextField
          required
          value={eventFinishTime}
          onChange={(event) => setEventFinishTime(event.target.value)}
          id="time"
          label="Finish Time"
          type="time"
          className={classes.textField}
          error={eventFinishTime === ""}
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
