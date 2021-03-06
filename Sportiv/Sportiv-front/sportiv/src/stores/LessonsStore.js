import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _lessons = [];

class LessonsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getLessons() {
    return _lessons;
  }

  getLessonById(id) {
    return _lessons.find((lesson) => lesson._id === id);
  }
}

const lessonsStore = new LessonsStore();

dispatcher.register((action) => {
  if (action.type === actionTypes.LOAD_LESSONS) {
    _lessons = action.data;
    lessonsStore.emitChange();
  }
});

export default lessonsStore;
