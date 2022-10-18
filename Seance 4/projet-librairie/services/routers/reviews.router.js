const express = require('express');
const reviewsRouter = express.Router();
const reviews = require('../mocks/reviews');

//GET
reviewsRouter.get('/reviews',(req,res)=>{
    res.json(reviews);
});
//ADD
reviewsRouter.post('/reviews',(req,res)=>{
    res.json(reviews.addReview(req.body.userId,req.body.bookId,req.body.note));
});
//DALETE
reviewsRouter.delete('/reviews/:id',(req,res)=>{
    res.json(reviews.deleteReview(req.params.id));
});

module.exports=reviewsRouter;