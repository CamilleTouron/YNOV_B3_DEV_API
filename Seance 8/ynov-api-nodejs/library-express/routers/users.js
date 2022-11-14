const express = require('express'),
      router = express.Router(),
      usersController = require('../controller/users');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.addUser);
router.delete('/:id', usersController.deleteUserById);
router.post('/login', usersController.login);

module.exports = router;