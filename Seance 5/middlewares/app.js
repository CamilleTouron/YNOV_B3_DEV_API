const express = require('express');
const app = express();
const rooter=require('./rooter');

app.use('/', rooter);

//Middleware de gestion d'erreur doit être à la fin de la déclaration des routes.
app.use((err, req, res, next) => {
    //500 valeur par defaut
    res.status(err.status||500).json(err.message);
});

module.exports=app;
