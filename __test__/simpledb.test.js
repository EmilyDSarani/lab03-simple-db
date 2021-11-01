const SimpleDb = require('../lib/Simpledb');
const { mkdir, rm } = require('fs/promises');

describe('SimpleDb', () => {
  const rootDir = './__test__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );

  });
  it('should save a file', async () => {
    const dataBase = new SimpleDb(rootDir);
    const object = { counter: 'white', granite: true };


    return dataBase
      .save(object) //saving the object
      .then(() => expect(object.id).toEqual(expect.any(String))); //it can now tell us if it has an id
      
  });
  it ('should get the id', () => {
    const dataBase = new SimpleDb(rootDir);
    const object = { text: 'aint no mountain high enough' };

    return dataBase
      .save(object)
      .then(() => dataBase.get(object.id))
      .then((file) => expect(file).toEqual(object));

  });

  
});
