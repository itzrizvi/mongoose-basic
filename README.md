## mongoose-basic

### 1. Connect with db link
`// MONGOOSE CONNECT
mongoose.connect('mongodb+srv://<DB-USER>:<DB-PASS>@cluster0.w9ewo.mongodb.net/test', { useNewUrlParser: true })
    .then(() => {
        // SERVER LISTEN
        app.listen(PORT, () => {
            console.log('SERVER IS RUNNING');
        });
    })
    .catch(error => {
        console.log(error);
    });
`

### 2. Create Schema For Data with a new file eg User.js
`const UserSchema = new Schema({
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

module.exports = User;`