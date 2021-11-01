const { writeFile, readFile, readdir } = require('fs/promises');
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

  async get(id){
    try {  const newerFile = `${id}.json`;
      this.file = path.join(this.rootDir, newerFile); //this will take the root to the id for that file
    
      const file = await readFile(this.file, 'utf8');
      const parseFile = JSON.parse(file);
      return parseFile;
    } catch(err) {
    
    
      if(err.code === 'ENOENT'){
        return null;
      }
      throw err;
   
    }
  }
  
  async getAll(){
    const files = await readdir(this.rootDir);
    const allFiles = files.map(file);
  }

}

module.exports = SimpleDb; 
