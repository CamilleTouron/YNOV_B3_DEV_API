const express = require('express'),
      router = express.Router(),
      axiosController = require('../controller/axios');

router.get('/', axiosController.getMeteo);

module.exports = router;