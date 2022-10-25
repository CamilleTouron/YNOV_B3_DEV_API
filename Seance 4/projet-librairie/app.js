const booksRouter = require('./services/routers/books.router');
const usersRouter = require('./services/routers/users.router');
const reviewsRouter = require('./services/routers/reviews.router');
const OpenApiValidator = require('express-openapi-validator');
const express = require('express');
const app = express();
const sequelize = require('./db.js');

sequelize.start();

app.use(express.json());
app.use(
    OpenApiValidator.middleware({
        apiSpec: './api.yaml',
        validateRequests: true, // (default)
        validateResponses: true, // false by default
    }),
);

app.use('/', booksRouter);
app.use('/', usersRouter);
app.use('/', reviewsRouter);

app.use((err, req, res, next) => {
    // format error
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});
module.exports = app;