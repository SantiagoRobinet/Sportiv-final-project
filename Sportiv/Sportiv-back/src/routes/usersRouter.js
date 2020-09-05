const express = require('express');
const debug = require('debug')('app:usersRouter');
const usersRoutesController = require('../controllers/usersRoutesController');


const usersRouter = express.Router();

function routes(User){
    const controller = usersRoutesController(User);
    usersRouter.route('/')
    .get(controller.get)

    return usersRouter;
}

module.exports = routes;