## mongoose-basic

### 1. Connect with db link
`// MONGOOSE CONNECT
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w9ewo.mongodb.net/test`, { useNewUrlParser: true })
    .then(() => {
        // SERVER LISTEN
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT : ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error);
    });
`

### 2. Create Schema For Data with a new file eg User.js