const express = require('express');
const usersRouter = express.Router();
const users = require('../services/users');

usersRouter.get('/users',(req,res)=>{
    res.json(users);
});

module.exports=usersRouter;