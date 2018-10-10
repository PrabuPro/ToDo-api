const mongoose = require('mongoose');

exports.User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlenght: 1,
        trim: true
    },
    name: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

});