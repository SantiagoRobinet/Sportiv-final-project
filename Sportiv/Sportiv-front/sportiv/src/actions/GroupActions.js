import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadGroups() {
  return axios.get('/api/groups').then((groups) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_GROUPS,
      data: groups.data
    })
});
}
