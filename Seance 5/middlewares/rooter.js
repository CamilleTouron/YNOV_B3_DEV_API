const express = require('express');
const rooter = express.Router();

//Jeter une erreur pour tester le middleware de gestion d'erreur.
rooter.get('/error', (req, res, next) => {
    console.log('in rooter...')
    throw new Error('test');
});

//GET by id
rooter.get('/:o', (req, res, next) => {
    console.log('in rooter...')
    res.status(200).json(req.params.o);
});

module.exports = rooter;