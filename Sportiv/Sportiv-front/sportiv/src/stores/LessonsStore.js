import { EventEmitter } from "events";
import dispatcher from "../dispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _lessons = [];
let _lesson = null;

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

  getLesson() {
    return _lesson;
  }

  getLessonById(id) {
    return _lessons.find((lesson) => lesson._id === id);
  }
}

const lessonsStore = new LessonsStore();

dispatcher.register((action) => {
  switch (action.type) {
    case actionTypes.LOAD_LESSONS:
      _lessons = action.data;
      lessonsStore.emitChange();
      break;

    default:
      break;
  }
});

export default lessonsStore;
