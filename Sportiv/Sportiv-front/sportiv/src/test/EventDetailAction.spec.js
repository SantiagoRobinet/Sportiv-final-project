import { loadEvents }  from '../actions/EventDetailAction';

describe('Event Detail Actions', () => {
    it('should exist', () => {
        expect(loadEvents).toBeDefined();
    })

    it('should return the data', () => {
        const axios = {
            get: () => {return new Promise}
        }

        
    })

})