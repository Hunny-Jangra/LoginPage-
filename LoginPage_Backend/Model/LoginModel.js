const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter Email Address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Enter Password'],
    }
}, {timestamps: true});

const loginModel = mongoose.model('LoginModel', loginSchema);

module.exports = loginModel;