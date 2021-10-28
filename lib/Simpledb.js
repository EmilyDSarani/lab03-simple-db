const { writeFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDb {
  constructor(rootDir){
      
    const newFile = `${shortid.generate()}.json`;
    this.newFolder = path.join(rootDir, newFile);

  }


  save(object) {
    return writeFile(this.newFolder, object);
  }
}

module.exports = SimpleDb; 
