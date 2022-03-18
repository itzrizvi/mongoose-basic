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
    user.save()
        .then(callb => {
            res.json(callb);
        })
        .catch(err => {
            console.log(err);
            res.json({
                message: 'Error Occured!'
            });
        });
};

exports.updateContact = (req, res) => {

};

exports.deleteContact = (req, res) => {

};