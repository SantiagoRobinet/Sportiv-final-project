import eventStore from "../stores/EventsStore";
import actionTypes from "../actions/actionTypes";
import dispatcher from "../dispatcher";

function reduceAction(action, state) {
  return {
    type: action,
    data: state,
  };
}

describe("Event Details Store", () => {
  let action;
  let mockCallbackFunction;

  beforeEach(() => {
    mockCallbackFunction = jest.fn();
    eventStore.addChangeListener(mockCallbackFunction);
  });

  afterEach(() => {
    eventStore.removeChangeListener(mockCallbackFunction);
  });

  it("should call the callback function", () => {
    action = reduceAction(actionTypes.LOAD_EVENTS, [
      { id: 1, title: "Longboard" },
    ]);
    dispatcher.dispatch(action);

    expect(mockCallbackFunction).toHaveBeenCalled();
    expect(mockCallbackFunction).toHaveBeenCalledTimes(1);
  });

  it("should exist store", () => {
    expect(eventStore).toBeDefined();
  });

  it("should return a list of events", () => {
    action = reduceAction(actionTypes.LOAD_EVENTS, [
      { id: 1, title: "Longboard" },
    ]);
    dispatcher.dispatch(action);
    expect(eventStore.getEvents()).toEqual(action.data);
  });

  it("should return an object when find a match", () => {
    action = reduceAction(actionTypes.LOAD_EVENTS, [
      { id: 1, title: "Longboard" },
      { id: 2, title: "Longboard" },
      { id: 3, title: "Longboard" },
    ]);
    dispatcher.dispatch(action);
    expect(eventStore.getEventById(1)).toEqual({ id: 1, title: "Longboard" });
  });

  it("should use de default case when the action type does not exist", () => {
    action = reduceAction(actionTypes.MODIFY_EVENT, [
      { id: 1, title: "Longboard" },
    ]);
    dispatcher.dispatch(action);
  });

  it("should return an object when find a match", () => {
    action = reduceAction(actionTypes.LOAD_EVENT, {
      id: 1,
      title: "Longboard",
    });
    dispatcher.dispatch(action);
  });

  it("should return an object when find a match", () => {
    action = reduceAction(actionTypes.CREATE_EVENT, {
      id: 1,
      title: "Longboard",
    });
    dispatcher.dispatch(action);
    expect(eventStore.getEvent()).toEqual({
      id: 1,
      title: "Longboard",
    });
  });
});
