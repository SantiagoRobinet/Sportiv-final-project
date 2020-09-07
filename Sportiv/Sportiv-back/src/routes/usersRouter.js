const express = require('express');
const debug = require('debug')('app:usersRouter');
const usersRoutesController = require('../controllers/usersRoutesController');
const userRouterController= require('../controllers/userRouterController')

const userRouter = express.Router();

function routes(User){
    const controller = usersRoutesController(User);
    userRouter.route('/')
    .post(controller.post)
   
    userRouter.use('/:userId', (req,res,next)=> {
        debug(req.params.userId)
        User.find({authid: req.params.userId}, (error, user) => {
            
            if(error) {
                res.send(error)
                res.status(400)
            }

            if(user){
                req.user = user;
                next();
            }
        });
    });

    userRouter.route('/:userId')
    .get(userRouterController.get)
    



    return userRouter;
}

module.exports = routes;