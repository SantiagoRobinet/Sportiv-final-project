const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema ({
    id: { type: Number },
    userName: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    profilePhoto:{ type: String },
    groups: [ String ],
    events: [ String ],
    classes: [ String ]
})

module.exports = mongoose.model('users', userModel);