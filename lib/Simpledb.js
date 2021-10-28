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
}

module.exports = SimpleDb; 
