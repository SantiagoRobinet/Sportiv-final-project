import { loadEvents, createEvent, deleteEvent } from "../actions/EventDetailAction";
import dispatcher from "../dispatcher";
import axios from "axios";
import actionTypes from "../actions/actionTypes";

jest.dontMock("../actions/EventDetailAction");
jest.mock("axios");
jest.mock("../dispatcher");

describe("Event Detail Actions", () => {
  afterEach(() => {
    dispatcher.dispatch.mockClear();
  });

  it("should call event api route", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadEvents();
    expect(axios.get.mock.calls[0][0]).toEqual("/api/events");
  });

  
  xit("should call event api route GET method", async () => {
    axios.get.mockReturnValue(new Promise((reject) => reject(error)));
    await loadEvents();
    expect().toEqual("/api/events");
  });



  it("should call dispatch with data GET method", async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await loadEvents();
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.LOAD_EVENTS,
      data: {},
    });
  });

  it("should call event api route POST method ", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createEvent('owner', 'photo', 'title', 'description', 'start', 'finish', 'date', 'location');
    expect(axios.post.mock.calls[0][0]).toEqual("/api/events");
  });

  it("should call dispatch with data POST method", async () => {
    axios.post.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await createEvent('owner', 'photo', 'title', 'description', 'start', 'finish', 'date', 'location');
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.CREATE_EVENT,
      data: {},
    });
  });
  
  it("should call event api route DELETE method ", async () => {
    axios.delete.mockReturnValue(new Promise((resolve) => resolve({ data: {} })));
    await deleteEvent(10);
    expect(axios.delete.mock.calls[0][0]).toEqual("/api/events/10");
  });

  xit("should call dispatch with data DELETE method", async () => {
    axios.delete.mockReturnValue(new Promise((resolve) => resolve( {data: {} })));
    await deleteEvent(10);
    expect(dispatcher.dispatch.mock.calls[0][0]).toEqual({
      type: actionTypes.DELETE_EVENT,
      data: {},
    });
  });
  
  





});
