const { todos } = require('../../models');

const dbGetToDo = async () => {
  const requiredTodo = await todos.findAll();
  return requiredTodo;
};

const dbGetToDoById = async (givenId) => {
  const requiredTodo = await todos.findAll({
    where: {
      id: givenId,
    },
  });
  return requiredTodo;
};

const dbPostToDo = async (givenTitle, givenDescription) => {
  const result = await todos.create({ title: givenTitle, description: givenDescription });
  return result;
};

const dbPatchToDoById = async (givenId, givenTitle, gievnDescription) => {
  const result = await todos.update({
    title: givenTitle,
    description: gievnDescription,
  }, {
    where: {
      id: givenId,
    },
  });
  return result;
};

const dbPutToDoById = async (givenId, givenTitle, gievnDescription) => {
  const result = await todos.update({
    title: givenTitle,
    description: gievnDescription,
  }, {
    where: {
      id: givenId,
    },
  });
  return result;
};

const dbDeleteToDoById = async (givenId) => {
  const result = await todos.destroy({
    where: {
      id: givenId,
    },
  });
  return result;
};

module.exports = {
  dbGetToDo, dbGetToDoById, dbPostToDo, dbPatchToDoById, dbPutToDoById, dbDeleteToDoById,
};