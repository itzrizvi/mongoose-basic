const User = require('./User');


exports.getAllContact = (req, res) => {

};

exports.getSingleContact = (req, res) => {

};

exports.createContact = (req, res) => {
    let { firstName, lastName, email, phoneNumber } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        phoneNumber
    });
    console.log(user);
    res.json({
        message: 'User Is Created Sucessfully!'
    })

};

exports.updateContact = (req, res) => {

};

exports.deleteContact = (req, res) => {

};