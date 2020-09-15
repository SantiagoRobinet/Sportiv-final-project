const sinon = require('sinon');
const { expect } = require('chai');
const eventsController = require('../controllers/eventsRoutesController');

describe('GET METHOD Events Routes',() => {
    afterEach(() => {
        sinon.restore();
    })

    it('should call find', () => {
        
        const Event = {
            find: (query, callback) => {callback()}
        }

       const req = {};
        
        const res = {
            status: () => {},
            json: () => {}
            
        }


        const statusSpy = sinon.spy(res, 'status');
        eventsController(Event).get(req, res);

        expect(statusSpy.calledWith(200)).to.be.true;
    })

    it('should respond status 400', () => {
        const Event = {
            find: (query, callback) => {
                const error = 'error'
                callback(error)}
        }

       const req = {};
        
        const res = {
            status: () => {},
            json: () => {}
            
        }


        const statusSpy = sinon.spy(res, 'status');
        eventsController(Event).get(req, res);

        expect(statusSpy.calledWith(400)).to.be.true;
    })
})