const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 40
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
        minlength: 9,
        maxlength: 15
    }
});


const User = model('User', UserSchema);

module.exports = User;