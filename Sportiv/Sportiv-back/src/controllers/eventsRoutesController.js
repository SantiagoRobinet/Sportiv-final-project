const debug = require('debug')('app:eventsRouterController');


function eventsController(Event){


    function post (req, res) {
        debug(req.body);
        const event = new Event(req.body);

        if(!req.body){
            res.status(400);
            res.send('event is required');
        } else {
            event.save();
            res.status(201);
            res.json(event);
        }
    }

    function get (req, res) {
        const query = {};
    
        Event.find(query, (error, events) => {
            if(error){
                res.status(400);
            } else {
                res.status(200);
                res.json(events);
            }
        })
    }
    return {get, post}
}

module.exports = eventsController;