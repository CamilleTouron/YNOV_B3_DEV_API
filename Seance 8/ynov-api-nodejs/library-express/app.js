const express = require('express');
const app = express();
const cors = require('cors');
const OpenApiValidator = require('express-openapi-validator');
const booksRouter = require('./routers/books');
const axiosRouter = require('./routers/axios');

app.use(cors());
app.use(express.json());
app.use(
    OpenApiValidator.middleware({
        apiSpec: './open-api.yaml'
    })
);

app.use('/books', booksRouter);
app.use('/axios', axiosRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});

module.exports = app;