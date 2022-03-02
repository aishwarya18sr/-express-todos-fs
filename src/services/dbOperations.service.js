const {
  dbGetToDo, dbGetToDoById, dbPostToDo, dbPatchToDoById, dbPutToDoById, dbDeleteToDoById,
} = require('../utils/dbOperations.utils');

const getToDo = async () => {
  const toDo = await dbGetToDo();
  return toDo;
};

const getToDoById = async (givenId) => {
  const toDo = await dbGetToDoById(givenId);
  return toDo;
};

const postToDo = async (title, description) => {
  await dbPostToDo(title, description);
  const toDo = await dbGetToDo();
  return toDo;
};

const patchToDoById = async (id, title, description) => {
  await dbPatchToDoById(id, title, description);
  const toDo = await dbGetToDo();
  return toDo;
};

const putToDoById = async (id, title, description) => {
  await dbPutToDoById(id, title, description);
  const toDo = await dbGetToDo();
  return toDo;
};

const deleteToDoById = async (givenId) => {
  await dbDeleteToDoById(givenId);
  const toDo = await dbGetToDo();
  return toDo;
};

module.exports = {
  getToDo, getToDoById, postToDo, patchToDoById, putToDoById, deleteToDoById,
};
