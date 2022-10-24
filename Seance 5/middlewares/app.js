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

app.use('/',rooter);

module.exports=app;
