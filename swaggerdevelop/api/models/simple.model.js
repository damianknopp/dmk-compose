const mongoose = require('mongoose');

const SimpleSchema = {
    id: String,
    name: {
        type: String,
        required: [true, 'name is required']
    },
    description: {
        type: String
    },
    first_seen: {
        type: Date,
        default: Date.now()
    },
    last_seen: {
        type: Date,
        default: Date.now()
    },
};

const SimpleModel = mongoose.model('SimpleModel', SimpleSchema, 'mongotest');

module.exports = SimpleModel;