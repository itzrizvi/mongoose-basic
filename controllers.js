const User = require('./User');


exports.getAllUsers = (req, res) => {
    User.find()
        .then(users => {
            res.render('index', { users, error: {} });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getSingleUser = (req, res) => {
    let { id } = req.params;
    User.findById(id)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createUser = (req, res) => {
    let { firstName, lastName, email, phoneNumber } = req.body;
    let error = {}
    if (!firstName || !lastName) {
        error.name = 'Please Provide Your Full Name'
    }
    if (!email) {
        error.email = 'Please Provide Your Email'
    }
    if (!phoneNumber) {
        error.phone = 'Please Provide Your Phone Number'
    }

    let isError = Object.keys(error).length > 0;

    if (isError) {
        User.find()
            .then(users => {
                return res.render('index', { users, error });
            })
            .catch(err => {
                console.log(err);
                return res.json({
                    message: 'Error Occured!'
                });
            });
    }

    let user = new User({
        firstName,
        lastName,
        email,
        phoneNumber
    });

    user.save()
        .then(callb => {
            User.find()
                .then(users => {
                    res.render('index', { users, error: {} })
                })
        })
        .catch(err => {
            console.log(err);
            return res.json({
                message: 'Error Occured!'
            });
        });
};

exports.updateUser = (req, res) => {
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
        });

};

exports.deleteUser = (req, res) => {
    let { id } = req.params;

    User.findOneAndDelete({ _id: id })
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            console.log(err);
        });
};