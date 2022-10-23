const express = require('express');
const reviewsRouter = express.Router();
const reviews = require('../services/reviews');

reviewsRouter.get('/review',(req,res)=>{
    res.status(404).json({
        error:"Try http://localhost:3000/librairie/reviews"
    });
});
function getStatusFromResponce(res){
    const jsonObject= JSON.parse(JSON.stringify(res));
    console.log(jsonObject);
    return jsonObject.status;
}
//GET
reviewsRouter.get('/reviews',(req,res)=>{    
    res.json(reviews);
});
//ADD
reviewsRouter.post('/reviews',(req,res)=>{
    const result = reviews.addReview(req.body.userId,req.body.bookId,req.body.note);
    res.status(getStatusFromResponce(result)).json(result);
});
//DELETE
reviewsRouter.delete('/reviews/:id',(req,res)=>{
    const result = reviews.deleteReview(req.params.id);
    res.status(getStatusFromResponce(result)).json(result);
});

module.exports=reviewsRouter;