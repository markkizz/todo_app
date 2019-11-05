const express = require('express');
const router = express.Router();

const todoController = require('../controller/todocontroller');

//route
router.get('/', todoController.getTodoList);
router.post('/', todoController.createList);
router.delete('/:id', todoController.deleteList);
router.put('/:id', todoController.changeList);


module.exports = router;
