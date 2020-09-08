const debug = require('debug')('app:userRoutesController');


function usersRoutesController(User){

    function post (req, res) {
        const user = new User(req.body);
        
        debug(req.body)
        if(!req.body) {
            res.status(400);
            res.send('user is required!');
        } else {
            user.save();

            res.status(201);
            res.json(user);
        }
    }
    
    return { post }
}

module.exports = usersRoutesController;