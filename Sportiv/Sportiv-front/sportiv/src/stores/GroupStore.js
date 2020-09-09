import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _groups = [];

class GroupStore extends EventEmitter {
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	getGroups() {
		return _groups;
	}

	getGroupById(id) {
		return _groups.find((group) => group._id === id);
	}
}

const groupStore = new GroupStore();

dispatcher.register((action) => {
	switch (action.type) {
		case actionTypes.LOAD_GROUPS:
            _groups = action.data;
			groupStore.emitChange();
			break;
		default:
			break;
	}
});

export default groupStore;
