import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _events = [];

class EventStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getEvents() {
        console.log(_events)
		return _events;
	}

	getEventById(id) {
		return _events.find((event) => event.id === id);
	}
}

const eventStore = new EventStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_EVENTS:
            console.log('ESTOY EN EL STORE')
            _events = action.data;
			eventStore.emitChange(_events);
			break;
		default:
			break;
	}
});

export default eventStore;
