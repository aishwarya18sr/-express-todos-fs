const { patchToDoById } = require('../services/dbOperations.service');

const patchToDoHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const toDoList = await patchToDoById(id, title, description);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  patchToDoHandler,
};
