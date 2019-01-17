const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const KEYS = require('./config/Keys'); 

const db = KEYS.mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected.'))
    .catch(err => console.log(err));

const Port =process.env.PORT || 3456;

app.listen(Port, () => console.log(`Server is working on port ${Port}.`));