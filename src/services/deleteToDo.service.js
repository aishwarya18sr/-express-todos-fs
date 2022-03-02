const { getToDo } = require('./getToDo.services');
const { writeFile } = require('../utils/fileOperations.utils');

const orderToDoList = (toDoList) => {
  const sizeToDo = toDoList.length;
  if (sizeToDo) {
    toDoList[0].id = 1;
  }
  for (let i = 1; i < sizeToDo; i++) {
    toDoList[i].id = toDoList[i - 1].id + 1;
  }
  return toDoList;
};

const convertToText = (newToDoList) => {
  let finalToDoString = '';
  newToDoList.forEach((eachToDo) => {
    if (finalToDoString.length !== 0) {
      finalToDoString += '\n';
    }
    finalToDoString += `${eachToDo.id}|${eachToDo.todo}`;
  });
  return finalToDoString;
};
const deleteToDo = async (id) => {
  if (typeof id !== 'string') {
    throw new Error('Invalid input type for id.');
  }
  const toDoList = await getToDo();
  let newToDoList = toDoList.filter((givenTodo) => (givenTodo.id !== id));
  newToDoList = orderToDoList(newToDoList);
  await writeFile('./resources/todos.txt', convertToText(newToDoList));
  const updatedToDoList = getToDo();
  return Promise.resolve(updatedToDoList);
};

module.exports = {
  deleteToDo,
};
