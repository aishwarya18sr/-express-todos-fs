const { putToDoById } = require('../services/dbOperations.service');

const putToDoHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const toDoList = await putToDoById(id, title, description);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  putToDoHandler,
};
