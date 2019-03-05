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

//===============LINKEDLIST============

// 10--->5----> 16

// let myLinkedList{
//   head: {
//     value:10,
//     next:{
//     value:5,
//     next:{
//     value:16,
//     next: null
//     }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head;
    this.length = 1;
  }

  //append()  
  append(value){
    //const newNode = new Node(value);
    // 1. created a new node to append
    const newNode = { 
        value: value,
        next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }//O(1)

  //prepend() - Add beginning of the list
  prepend(value){  //1 --> 10--->5----> 16
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head; //pointer to the next null
    this.head = newNode;
    this.length++;
    return this;
  }//O(1)

//insert()
//prepend -> 1 => 10--->insert 99 => 5----> 16

printList(){
  const array = [];
  let currentNode = this.head;
  while (currentNode !== null){
    array.push(currentNode.value);
      currentNode = currentNode.next;
  }
  return array;
}
insert(index, value){ 
//check params
if(index >= this.length){
  return this.append(value);
  }
  const newNode = {
    value: value,
    next:null,
  };
  const leader = this.traverseToIndex(index-1);
  const holdingPointer = leader.next;
  leader.next = newNode;
  newNode.next = holdingPointer;
  this.length++;
  return this.printList;
}
traverseToIndex(index){
  //check params
  let counter = 0;
  let currentNode = this.head;
  while(counter !== index){
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
  } // O(n)

//remove()
  remove(index){
    //check params
    const leader = this.traverseToIndex(index-1);
    const deleteNode = leader.next;
    leader.next = deleteNode.next;
    this.length--;
    return this.printList();
  }
}// O(n)


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 100);
myLinkedList.printList();
myLinkedList.remove(2);
//console.log(myLinkedList);







