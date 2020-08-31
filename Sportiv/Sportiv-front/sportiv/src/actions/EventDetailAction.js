import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import event from "../eventmock";

export function loadEvents() {
  return new Promise((resolve) => {
    console.log("ESTOY EN EL DETAIL ACTION");
    resolve(event);
  }).then((events) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_EVENTS,
      data: events
    })
});
}
