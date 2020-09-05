import dispatcher from "../dispatcher";
import actionTypes from "./actionTypes";
import axios from 'axios';

export function loadUser() {
  return axios.get('/api/user').then((user) =>{
    dispatcher.dispatch({
      type: actionTypes.LOAD_USER,
      data: user.data
    })
});
}

export default {loadUser};