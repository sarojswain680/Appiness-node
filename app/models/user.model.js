const mongoose = require('mongoose');

const User = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    age: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);