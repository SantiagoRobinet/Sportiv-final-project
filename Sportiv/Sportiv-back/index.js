const express = require('express');
const debug = require('debug')('app');
const mongoose =  require('mongoose')
const bodyParser = require('body-parser');
const chalk = require('chalk');


const app = express();
const port = process.env.PORT || 2804;
// const db = mongoose.connect('mongodb+srv://admin:admin1234@cluster0.rpj2g.mongodb.net/sportivdatabase?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connect('mongodb://localhost/sportivdatabase');
const Event = require('./models/eventModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get( '/', (req, res) => {
    res.send('my server works');
});

const eventRouter = require('./src/routes/eventsRouter')(Event);

app.use('/api/events', eventRouter);

app.listen(port, debug(chalk.cyan(`The server is running on port :`, chalk.bgYellow(port))));