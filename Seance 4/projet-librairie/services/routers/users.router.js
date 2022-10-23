const express = require('express');
const usersRouter = express.Router();
const users = require('../services/users');

usersRouter.get('/user', (req, res) => {
    res.status(404).json({
        error: "Try http://localhost:3000/librairie/users"
    });
});

function getStatusFromResponce(res) {
    const jsonObject = JSON.parse(JSON.stringify(res));
    return jsonObject.status;
}

//GET
usersRouter.get('/users', (req, res) => {

});

//GET by id
usersRouter.get('/users/:id', (req, res) => {
    const result = users.getUserById(req.params.id);
    res.status(getStatusFromResponce(result)).json(result);
});

//GET and GET by full name
usersRouter.get('/users', (req, res) => {
    if (!req.body.nom || !req.body.prenom) {
        res.json(users);
    } else {
        const result = users.getIdByFullName(req.body.nom, req.body.prenom);
        res.status(getStatusFromResponce(result)).json(result);
    }

});

//ADD
usersRouter.post('/users', (req, res) => {
    if (!req.body.id || !req.body.nom || !req.body.prenom) {
        res.status(400).json({
            status: 400,
            error: "id, nom and prenom are required."
        });
    }
    const result = users.addUser(req.body.id, req.body.nom, req.body.prenom)
    res.status(getStatusFromResponce(result)).json(result);
});

//DELETE
usersRouter.delete('/users/:id',(req,res)=>{
    const result = users.deleteUser(req.params.id)
    res.status(getStatusFromResponce(result)).json(result);
});

module.exports = usersRouter;
