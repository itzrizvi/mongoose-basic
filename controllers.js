const User = require('./User');


exports.getAllContact = (req, res) => {
    User.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            console.log(err);
        })
};

exports.getSingleContact = (req, res) => {
    let { id } = req.params;
    User.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
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
    let { firstName, lastName, email, phoneNumber } = req.body;
    let { id } = req.params;

    User.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                firstName,
                lastName,
                email,
                phoneNumber
            }
        },
        { new: true })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })

};

exports.deleteContact = (req, res) => {
    let { id } = req.params;

    User.findOneAndDelete({ _id: id })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        })
};