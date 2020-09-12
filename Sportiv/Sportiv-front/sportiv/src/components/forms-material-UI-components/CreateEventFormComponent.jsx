import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useAuth0 } from "@auth0/auth0-react";
import { createEvent } from "../../actions/EventDetailAction";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      fontFamily: "Kufam",
    },
  },
}));

export default function CreateEventForm() {
  const { user } = useAuth0();
  console.log('USERRRRR >>>>>>>',user)



  
  const [eventPhoto, setEventPhoto] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventFinishTime, setEventFinishTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");

  const classes = useStyles();

  function onClickCreateEvent(
    event,
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
    createEvent(
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
          value={eventDate}
          onChange={(event) => setEventDate(event.target.value)}
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          error={eventDate === ''}
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
          defaultValue="07:30"
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
          value={eventFinishTime}
          onChange={(event) => setEventFinishTime(event.target.value)}
          id="time"
          label="Finish Time"
          type="time"
          defaultValue="19:30"
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
            onClickCreateEvent(
              event,
              user.sub,
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
          CREATE EVENT
        </button>
      </form>
    </>
  );
}
