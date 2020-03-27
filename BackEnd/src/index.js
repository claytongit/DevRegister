const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const routes = require('./routes');

app.use(cors());

mongoose.connect(
    'mongodb://localhost:27017/dev',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());
app.use(routes);

app.listen(3333);