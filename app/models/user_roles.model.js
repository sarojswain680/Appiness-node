const mongoose = require('mongoose');

const User_roles = mongoose.Schema({
    user_id: String,
    role: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User_roles', User_roles);