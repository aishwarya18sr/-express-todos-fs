const { getToDoById } = require('../services/dbOperations.service');

const getToDoByIdHandler = async (req, res) => {
  const givenId = req.params.id;
  const toDoList = await getToDoById(givenId);
  res.json({
    toDoList,
  }).status(200);
};

module.exports = {
  getToDoByIdHandler,
};
