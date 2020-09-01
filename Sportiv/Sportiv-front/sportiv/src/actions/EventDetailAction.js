import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import event from "../eventmock";

export function loadEvents() {
  return new Promise((resolve) => {
    resolve(event);
  }).then((events) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_EVENTS,
      data: events
    })
});
}
