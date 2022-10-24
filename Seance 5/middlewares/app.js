const express = require('express');
const app = express();
const rooter=require('./rooter');

app.use((req,res,next)=>{
    const name="middleware a";
    console.log(name);
    console.log("path = "+req.path);
    console.log(req.query);
    next();
});
app.use((req,res,next)=>{
    const name="middleware b";
    console.log(name);
    console.log("path = "+req.path);
    console.log(req.query);
    //res.send(name);
    next();
});

app.use('/', rooter);

//Middleware de gestion d'erreur doit être à la fin de la déclaration des routes.
app.use((err, req, res, next) => {
    res.status(400).json(err.message);
});

module.exports=app;
