import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadEvents() {
  return axios.get('/api/events').then((events) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_EVENTS,
      data: events.data
    })
});
}
