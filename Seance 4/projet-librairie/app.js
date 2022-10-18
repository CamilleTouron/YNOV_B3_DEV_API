const express = require('express');
const app = express();
const booksRouter = require('./services/routers/books.router');
const usersRouter = require('./services/routers/users.router');
const reviewsRouter = require('./services/routers/reviews.router');

app.use('/librairie',booksRouter);
app.use('/librairie',usersRouter);
app.use('/librairie',reviewsRouter);

module.exports=app;