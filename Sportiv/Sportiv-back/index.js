const express = require('express');
const debug = require('debug')('app');
const mongoose =  require('mongoose')
const bodyParser = require('body-parser');
const chalk = require('chalk');


const app = express();
const port = process.env.PORT || 2804;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get( '/', (req, res) => {
    res.send('my server works');
});

app.listen(port, debug(chalk.cyan(`The server is running on port :`, chalk.bgYellow(port))));