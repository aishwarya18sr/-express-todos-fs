const { postToDo } = require('../services/dbOperations.service');

const postToDoHandler = async (req, res) => {
  const { title, description } = req.body;
  const toDoList = await postToDo(title, description);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  postToDoHandler,
};
