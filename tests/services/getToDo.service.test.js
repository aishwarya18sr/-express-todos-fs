const { getToDo } = require('../../src/services/getToDo.services');
const resultToDo = require('../../src/constants/resultToDo.json');

describe('getToDo function', () => {
  xtest('should return a object with id and todo if a proper input is given', async () => {
    const expectedToDo = resultToDo;
    const toDo = await getToDo();
    expect(toDo).toStrictEqual(expectedToDo);
  });
});
