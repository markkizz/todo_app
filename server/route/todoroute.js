const express = require('express');
const router = express.Router();

const todoController = require('../controller/todocontroller');

//route
router.get('/', todoController.getTodoList);
router.post('/', todoController.createList);
router.delete('/:id', todoController.deleteList);



module.exports = router;
