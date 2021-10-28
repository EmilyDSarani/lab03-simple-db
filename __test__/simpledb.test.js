const SimpleDb = require('../lib/Simpledb');
const { mkdir, rm } = require('fs');

describe('SimpleDb', () => {
  const rootDir = './__test__/store';

  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() =>
      mkdir(rootDir, { recursive: true })
    );

  });
  it('should keep my files safe', () => {
    const dataBase = new SimpleDb(rootDir);
      
  });
});
