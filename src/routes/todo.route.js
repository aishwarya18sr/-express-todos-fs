const express = require('express');
const { getToDoHandler } = require('../handlers/getToDo.handler');
const { postToDoHandler } = require('../handlers/postToDo.handler');
const { patchToDoHandler } = require('../handlers/patchToDo.handler');
const { deleteToDoHandler } = require('../handlers/deleteToDo.handler');

const router = express.Router();
router.get('/', getToDoHandler);
router.post('/', postToDoHandler);
router.patch('/', patchToDoHandler);
router.delete('/', deleteToDoHandler);

module.exports = {
  router,
};
