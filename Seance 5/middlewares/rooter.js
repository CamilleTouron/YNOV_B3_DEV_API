const express = require('express');
const rooter = express.Router();

//Middleware de gestion d'erreur :
rooter.use('/', (error, req, res, next) => {
    try {
        //
    } catch (error) {
        res.json(error);
    }
})
rooter.get('/error', (req, res, next) => {
    console.log('in rooter...')
    throw 'test';
});

//GET by id
rooter.get('/:o', (req, res, next) => {
    console.log('in rooter...')
    res.status(200).json(req.params.o);
});

module.exports = rooter;