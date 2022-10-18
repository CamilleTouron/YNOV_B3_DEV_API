const express = require('express');
const myRouter = express.Router();

myRouter.get('/',(req,res)=>{
    res.json({succes:true});
});

module.exports=myRouter;