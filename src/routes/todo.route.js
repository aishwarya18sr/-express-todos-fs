const express = require('express');
const { getToDoHandler } = require('../handlers/getToDo.handler');
const { getToDoByIdHandler } = require('../handlers/getToDoById.handler');
const { postToDoHandler } = require('../handlers/postToDo.handler');
const { patchToDoHandler } = require('../handlers/patchToDo.handler');
const { putToDoHandler } = require('../handlers/putToDo.handler');
const { deleteToDoHandler } = require('../handlers/deleteToDo.handler');

const router = express.Router();
router.get('/', getToDoHandler);
router.get('/:id', getToDoByIdHandler);
router.post('/', postToDoHandler);
router.patch('/:id', patchToDoHandler);
router.put('/:id', putToDoHandler);
router.delete('/:id', deleteToDoHandler);

module.exports = {
  router,
};
