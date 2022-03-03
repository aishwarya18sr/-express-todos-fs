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
    const receivedToDoList = await dbGetToDoById(2);
    expect(toDoMock).toHaveBeenCalled();
    expect(receivedToDoList).toStrictEqual(expectedToDoList);
  });
  test('should return error if id is not provided', async () => {
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(new Error('Id has not been provided'));
    try {
      await dbGetToDoById('');
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Id has not been provided');
    }
  });
  test('should return invalid input if id is a boolean', async () => {
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbGetToDoById(true);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is array', async () => {
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbGetToDoById([2, 3]);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is float', async () => {
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbGetToDoById(2.5);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is object', async () => {
    const toDoMock = jest.spyOn(todos, 'findAll').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbGetToDoById({ a: 3 });
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
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
  test('should return error if id is not provided', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Id has not been provided'));
    try {
      await dbPatchToDoById('');
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Id has not been provided');
    }
  });
  test('should return invalid input if id is a boolean', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPatchToDoById(true);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is array', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPatchToDoById([2, 3]);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is float', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPatchToDoById(2.5);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is object', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPatchToDoById({ a: 3 });
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
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
  test('should return error if id is not provided', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Id has not been provided'));
    try {
      await dbPutToDoById('');
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Id has not been provided');
    }
  });
  test('should return invalid input if id is a boolean', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPutToDoById(true);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is array', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPutToDoById([2, 3]);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is float', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPutToDoById(2.5);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is object', async () => {
    const toDoMock = jest.spyOn(todos, 'update').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbPutToDoById({ a: 3 });
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
});

describe('dbDeleteToDoById function', () => {
  test('should delete the todo with given id', async () => {
    const id = '10';
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue({});
    await dbDeleteToDoById(id);
    expect(toDoMock).toHaveBeenCalled();
  });
  test('should return error if id is not provided', async () => {
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue(new Error('Id has not been provided'));
    try {
      await dbDeleteToDoById('');
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Id has not been provided');
    }
  });
  test('should return invalid input if id is a boolean', async () => {
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbDeleteToDoById(true);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is array', async () => {
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbDeleteToDoById([2, 3]);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is float', async () => {
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbDeleteToDoById(2.5);
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
  test('should return invalid input if id is object', async () => {
    const toDoMock = jest.spyOn(todos, 'destroy').mockResolvedValue(new Error('Invalid input type'));
    try {
      await dbDeleteToDoById({ a: 3 });
    } catch (err) {
      expect(toDoMock).toHaveBeenCalled();
      expect(err.message).toBe('Invalid input type');
    }
  });
});
