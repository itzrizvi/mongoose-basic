const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Routers
const router = require('./routes');

const app = express(); // APP
const PORT = process.env.PORT || 5000; // PORT 

// MIDDLE WARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', router);

// SERVER ROOT
app.get('/', (req, res) => {

})

// MONGOOSE CONNECT
mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w9ewo.mongodb.net/test`, { useNewUrlParser: true })
    .then(() => {
        // SERVER LISTEN
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT : ${PORT}`);
            console.log('DB CONNECTED');
        });
    })
    .catch(error => {
        console.log(error);
    });




