const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String,
    isApproved : {
        type: 'boolean',
        default: false,
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;