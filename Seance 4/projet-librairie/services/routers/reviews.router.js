const express = require('express');
const reviewsRouter = express.Router();
const reviews = require('../mocks/reviews');

reviewsRouter.get('/reviews',(req,res)=>{
    res.json(reviews);
});

module.exports=reviewsRouter;