const { getToDo } = require('../services/dbOperations.service');

const getToDoHandler = async (req, res) => {
  const toDoList = await getToDo();
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  getToDoHandler,
};
