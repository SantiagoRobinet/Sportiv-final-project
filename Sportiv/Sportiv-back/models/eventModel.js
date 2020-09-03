const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventModel = new Schema ({
    id: { type: Number },
    title: { type: String },
    date: { type: String },
    description: { type: String },
    start: { type: String },
    finish: { type: String },
    people: { type: Number },
    level: { type: String },
})

module.exports = mongoose.model('events', eventModel);