const express = require('express');
const booksRouter = express.Router();
const books = require('../services/books');

booksRouter.get('/book',(req,res)=>{
    res.status(404).json({
        error:"Try http://localhost:3000/librairie/books"
    });
});

function getStatusFromResponce(res){
    const jsonObject= JSON.parse(JSON.stringify(res));
    return jsonObject.status;
}

//GET
booksRouter.get('/books',(req,res)=>{
    res.json(books);
});

//GET by id
booksRouter.get('/books/:id',(req,res)=>{
    const result = books.getBookById(req.params.id);
    res.status(getStatusFromResponce(result)).json(result);
});

//ADD
booksRouter.post('/books',(req,res)=>{
    if(!req.body.nom || !req.body.id || !req.body.date){
        res.status(400).json({
            status : 400,
            error : "id, nom and date are required."
        });
    }
    const result = books.addBook(req.body.id,req.body.nom,req.body.date)
    res.status(getStatusFromResponce(result)).json(result);
});

//DELETE
booksRouter.delete('/books/:id',(req,res)=>{
    const result = books.deleteBook(req.params.id)
    res.status(getStatusFromResponce(result)).json(result);
});

module.exports=booksRouter;