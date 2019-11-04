const express = require('express');
const router = express.Router();

const todoController = require('../controller/todocontroller');

//route
router.get('/', todoController.getTodo);




module.exports = router;
