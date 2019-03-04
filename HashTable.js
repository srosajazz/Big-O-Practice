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
  } // O(1)

// set function
  set(key, value){
    let address = this._hash(key);
    if (!this.data[address]){
      this.data[address] = [];
    }
     this.data[address].push([key, value]);
     return this.data;
  }// O(1)

// get function
  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket){
     for(let i = 0; i < currentBucket.length; i++)
     {
       if(currentBucket[i][0] === key){
         return currentBucket[i][1];
       }
     } 
    } // O(1)
    return undefined;
  }

//Keys function => will loop through all keys.
keys() {
  const keysArray = [];
  for(let i = 0; i < this.data.length; i++){
    if(this.data[i]) {
      //console.log(this.data[i][0][0]);
      keysArray.push(this.data[i][0][0]);
    }
  }
  return keysArray;
}

}
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('oranges', 2);
myHashTable.set('mango', 5);
myHashTable.keys();
//myHashTable._hash('grapes');

//=====Exercise: First Recurring Character=====

//Google Question
// 1. Given an array = [2,5,1,2,3,5,1,2,4]:
//    It should return 2

//2. Given an array = [2,1,1,2,3,5,1,2,4]:
//  It should return 1

//3. Given an array = [2,3,4,5]:
//   It should return undefined

//Brute force Solution=> O(n^2) Quadratic
//Nestle loop
function firstRecurringCharacter(input) {
  for(let i = 0; i< input.length; i++){
    for(let j = i + 1; j < input.length; j++){
      if(input[i] === input[j]){
        return input[i];
      }
    }
  }
  return undefined;
} //O(n^2) => Quadratic 
  //O(1) constant
//firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);

//===============HashTable=============
function firstRecurringCharacter2(input){
  let map ={};
  for(let i = 0; i < input.length; i++){
    //console.log(map);
    //console.log(map[input[i]] !== undefined);
    if(map[input[i]] !== undefined){
      return input[i];
    } else {
      map[input[i]] = i;
    }
     console.log(map);
  }
  return undefined;
} //O(n) => linear

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


