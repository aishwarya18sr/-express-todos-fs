const { deleteToDoById } = require('../services/dbOperations.service');

const deleteToDoHandler = async (req, res) => {
  const givenId = req.params.id;
  const toDoList = await deleteToDoById(givenId);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  deleteToDoHandler,
};
