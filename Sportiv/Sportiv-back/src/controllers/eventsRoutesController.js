
function eventsController(Event){

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
    return {get}
}

module.exports = eventsController;