const express = require('express');
const LoginRoute = require('./Router/LoginRoute');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/', LoginRoute);

module.exports = app;