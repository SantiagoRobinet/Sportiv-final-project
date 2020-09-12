import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from "axios";

export function loadEvents() {
  return axios
    .get("/api/events")
    .then((events) => {
      dispatcher.dispatch({
        type: actionTypes.LOAD_EVENTS,
        data: events.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

export function createEvent(
  owner,
  photo,
  title,
  description,
  start,
  finish,
  date,
  location
) {
  return axios
    .post("/api/events", {
      owner,
      photo,
      title,
      description,
      start,
      finish,
      date,
      location,
    })
    .then((eventResponse) => {
      dispatcher.dispatch({
        type: actionTypes.CREATE_EVENT,
        data: eventResponse.data,
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
