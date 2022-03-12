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
`(Check User.js for user schema and model)`


### 3. Create controllers like controllers.js
`(Check controllers.js for routers)`

### 4. Create routes.js with those controllers for each route action
`(Check routes.js for routers actions)`

### 5. Require routers on server file and use with app.