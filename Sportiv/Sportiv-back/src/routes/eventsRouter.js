const express = require('express');
const debug = require('debug')('app:eventsRouter');
const eventsRoutesController = require('../controllers/eventsRoutesController');


const eventsRouter = express.Router();

function routes(Event){
    const controller = eventsRoutesController(Event);
    eventsRouter.route('/')
    .get(controller.get)
    .post(controller.post)

    return eventsRouter;
}

module.exports = routes;