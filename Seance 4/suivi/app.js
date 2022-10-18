const express = require('express');
const app = express();
const myRouter = require('./myRouter');

app.use('/test',myRouter);

module.exports=app;
