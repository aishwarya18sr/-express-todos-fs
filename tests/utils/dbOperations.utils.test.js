const { getExpectedToDoList } = require('../../src/constants/resultToDo');
const { todos } = require('../../models');
const {
  dbGetToDo, dbGetToDoById, dbPostToDo, dbPatchToDoById, dbPutToDoById, dbDeleteToDoById,
} = require('../../src/utils/dbOperations.utils');

describe('dbGetToDo function', () => {
  test('should return all the todos', async () => {
    const expectedToDoList = getExpectedToDoList();
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(expectedToDoList);
    const receivedToDoList = await dbGetToDo();
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoList).toStrictEqual(expectedToDoList);
  });
});

describe('dbGetToDoById function', () => {
  test('should return the todo with given id', async () => {
    const expectedToDoList = {
      id: 2,
      title: 'Get fruits',
      description: 'Get apple, orange and grapes',
      createdAt: '2022-03-02T10:25:38.430Z',
      updatedAt: '2022-03-02T10:25:38.430Z',
    };
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(expectedToDoList);
    const receivedToDoList = await dbGetToDoById();
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoList).toStrictEqual(expectedToDoList);
  });
});

describe('dbPostToDo function', () => {
  test('should add the todo with given title and description', async () => {
    const title = 'test title';
    const description = 'test description';
    const toDoMock = jest.spyOn(todos, 'create').mockResolvedValue({});
    await dbPostToDo(title, description);
    expect(toDoMock).toHaveBeenCalled();
  });
});

describe('dbPatchToDoById function', () => {
  test('should change the todo of given id with given title and description', async () => {
    const id = '10';
    const title = 'test title 1';
    const description = 'test description 1';
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue({});
    await dbPatchToDoById(id, title, description);
    expect(toDoMock).toHaveBeenCalled();
  });
});

describe('dbPutToDoById function', () => {
  test('should change the todo of given id with given title and description', async () => {
    const id = '10';
    const title = 'test title 1';
    const description = 'test description 1';
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue({});
    await dbPutToDoById(id, title, description);
    expect(toDoMock).toHaveBeenCalled();
  });
});

describe('dbDeleteToDoById function', () => {
  test('should delete the todo with given id', async () => {
    const id = '10';
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue({});
    await dbDeleteToDoById(id);
    expect(toDoMock).toHaveBeenCalled();
  });
});
