const express = require('express');
const debug = require('debug')('app:groupsRouter');
const groupsRoutesController = require('../controllers/groupsRoutesController')

const groupsRouter = express.Router();

function routes(Group){
    const controller = groupsRoutesController(Group);
    groupsRouter.route('/')
    .get(controller.get)

    return groupsRouter;
}

module.exports = routes;