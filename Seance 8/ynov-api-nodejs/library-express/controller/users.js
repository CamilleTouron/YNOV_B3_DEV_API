const usersService = require('../services/users');
const loggingService = require('../services/login');

exports.getUsers = async (req, res) => {
   const users = await usersService.getUsers();
   res.json({success: true, data: users});
}

exports.getUserById = async (req, res, next) => {
   try {
      const userId = parseInt(req.params.id);
      const user = usersService.getUserById(userId);
      if (user) {
         res.json({success: true, data: user});
      } else {
         res.status(404).json({success: false, message: 'User not found for this id'});
      }
   } catch (e) {
      res.status(400).json({success: false, message: 'id parameter must be a valid number'});
   }
}

exports.addUser = async (req, res, next) => {
   if (req.body!=null && req.body.id!=null && req.body.firstname!=null && req.body.lastname!=null && req.body.isAdmin!=null && req.body.password!=null) {
      try {
         usersService.addUser(req.body.id, req.body.firstname, req.body.lastname, req.body.isAdmin,req.body.password);
         res.status(201).json({success: true, message: `User has been added`});
      } catch (e) {
         res.status(400).json({success: false, message: 'User has not been added', error: e.message});
      }
   } else {
      res.status(400).json({success: false, message: 'Cannot add this user, make sure all args has been sent'});
   }
}

exports.deleteUserById = async (req, res, next) => {
   if (req.params.userId) {
      const user = usersService.getUserById(req.params.userId);
      if (user) {
         usersService.deleteUserById(req.params.userId);
         res.json({success: true, message: 'User has been deleted'});
      } else {
         res.status(404).json({success: false, message: `The user with id ${req.params.userId} doesn't exists, it cannot be deleted`});
      }
   } else {
      res.status(400).json({success: false, message: 'The userId is required'});
   }
}
exports.login = async (req, res, next) => {
   if (req.body!=null && req.body.id!=null && req.body.password!=null) {
      try {
         const token = loggingService.loggin(req.body.id,req.body.password);
         res.status(200).json({success: true, token: token});
      } catch (e) {
         res.status(400).json({success: false, message: 'Cannot login', error: e.message});
      }
   } else {
      res.status(400).json({success: false, message: 'Cannot login, make sure all args has been sent'});
   }
}