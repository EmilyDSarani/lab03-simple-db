const { readFile } = require('fs');
const { writeFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid'); //npm i shortid, this generates a random id per file

class SimpleDb {
  constructor(rootDir){
    this.rootDir = rootDir;

  }

  
  save(object) {
    const id = shortid.generate(); //add an id onto the object
    const file = `${id}.json`; //adding the new id
    this.newFolder = path.join(this.rootDir, file); 


    
    object.id = id; //this id should match the fileName
    const stringyObject = JSON.stringify(object);  //need to stringify it

    return writeFile(this.newFolder, stringyObject); //then instead of sending just object, it will be stringy object
  }
  get(id){
    const newerFile = `${id}.json`;
    this.file = path.join(this.rootDir, newerFile); //this will take the root to the id for that file
    const parseFile = readFile(this.file, 'json').then((file) => JSON.parse(file));
    return parseFile.catch((error) => {
      if(error.code === 'ENOENT'){
        return null;
      }
      throw error;
    });
  }


}

module.exports = SimpleDb; 
