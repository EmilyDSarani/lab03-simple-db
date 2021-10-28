const SimpleDb = require('../lib/Simpledb');
const { mkdir, rm } = require('fs/promises');

describe('SimpleDb', () => {
  const rootDir = './__test__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );

  });
  it('should save a file', () => {
    const dataBase = new SimpleDb(rootDir);
    const object = { counter: 'white', granite: true };


    return dataBase
      .save(object)
      .then((otherFile) => expect(otherFile).toEqual(object));
      
  });
});
