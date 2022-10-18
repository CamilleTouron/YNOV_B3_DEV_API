const express = require('express');
const booksRouter = express.Router();
const books = require('../mocks/books');

//GET
booksRouter.get('/books',(req,res)=>{
    res.json(books);
});

//GET by id
booksRouter.get('/books/:id',(req,res)=>{
    res.json(books.getBookById(req.params.id));
});

//ADD
booksRouter.post('/books',(req,res)=>{
    res.json(books.addBook(req.body.id,req.body.nom));
});

//DELETE
booksRouter.delete('/books/:id',(req,res)=>{
    res.json(books.deleteBook(req.params.id));
});

module.exports=booksRouter;