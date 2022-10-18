const express = require('express');
const booksRouter = express.Router();
const books = require('../mocks/books');

booksRouter.get('/books',(req,res)=>{
    res.json(books);
});

module.exports=booksRouter;