//========HashTable Template============//

class HashTable{
    constructor(size){
      this.data = new Array(size);
      //[['grapes', 100000]]
    }
  
  //Hash function (_hash) means => private.
    _hash(key){
      let hash = 0;
      for(let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
      }
      return hash;
    }
  
  // set function
    set(key, value){
      let address = this._hash(key);
      if (!this.data[address]){
        this.data[address] = [];
      }
       this.data[address].push([key, value]);
       return this.data;
    }
  
  // get function
    get(key){
      let address = this._hash(key);
      const currentBucket = this.data[address];
      console.log(currentBucket);
    }
  }
  const myHashTable = new HashTable(50);
  myHashTable.set('apples', 10000);
  myHashTable.set('oranges', 55);
  myHashTable.get('grapes')
  
  //myHashTable._hash('grapes');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  