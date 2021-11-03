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
  it ('should get the id', async () => {
    const dataBase = new SimpleDb(rootDir);
    const object = { text: 'aint no mountain high enough' };

    await dataBase
      .save(object);
    const file = await dataBase.get(object.id);
    return expect(file).toEqual(object);

  });
  it ('should get all files', async () => {
    const dataBase = new SimpleDb(rootDir);
    const object1 = { text: 'You aint never had a friend like me' };
    const object2 = { text: 'Prince Ali, fabulous he, Ali Abbawa' };
    const expectation = [{
      id: expect.any(String),
      text: expect.any(String),
    },
    {
      id: expect.any(String),
      text: expect.any(String),
    }
    ];

    await dataBase
      .save(object1)
      .then(() => dataBase.save(object2))
      .then(() => dataBase.getAll())
      .then((files) => expect(files).toEqual(expectation));

  });

  
});
