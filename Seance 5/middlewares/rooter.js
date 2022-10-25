const express = require('express');
const rooter = express.Router();
const createError = require('http-errors')

//Jeter une erreur pour tester le middleware de gestion d'erreur.
rooter.get('/error', (req, res, next) => {
    console.log('in rooter...')
    throw new createError(400,"Error Message");
});

//GET by id
rooter.get('/:o', (req, res, next) => {
    console.log('in rooter...')
    res.status(200).json(req.params.o);
});

module.exports = rooter;