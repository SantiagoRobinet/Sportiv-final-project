import { loadEvents }  from '../actions/EventDetailAction';
import dispatcher  from '../dispatcher'
import axios from 'axios';
import actionTypes from '../actions/actionTypes';


jest.dontMock('../actions/EventDetailAction');
jest.mock('axios');
jest.mock('../dispatcher');


describe('Event Detail Actions', () => {
    afterEach(() => {
        dispatcher.dispatch.mockClear();
    })

    it('should call event api route', async () => {
        axios.get.mockReturnValue(new Promise((resolve) => resolve({ data: {}})));
        await loadEvents();
        expect(axios.get.mock.calls[0][0]).toEqual('/api/events');
    })

    it('should call dispatch with data', async () => {
        axios.get.mockReturnValue(new Promise ((resolve) => resolve({data: {}})));
        await loadEvents();
        expect(dispatcher.dispatch.mock.calls[0][0]).toEqual( { type: actionTypes.LOAD_EVENTS, data: {}})
    })


})