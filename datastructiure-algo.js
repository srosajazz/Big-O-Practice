// log all pairs of Array
const boxes = ['a', 'b','c','d','e'];

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }

    }
}
logAllPairsOfArray(boxes); //O(n^2)


const array1 = ['a','b', 'c','x'];
const array2 = ['z','y', 'x'];

function containsCommonItem(arr1, arr2){
    for(let i=0; i < arr1.length; i++){
     for(let j=0; j < arr2.length; j++){
         if(arr1[i] === arr2[j]){
             return true;
         }
     }
    }
    return false;
}
// O(a*b)
O(1) - Space Complexity
containsCommonItem(array1, array2);

//===============BETTER SOLUTION:

array1 == > obj {

a: true
b: true
c: true
x: true
}
array2[index] === obj;
const array1 = ['a','b', 'c','x'];
//Compare array2 against array1:
const array2 = ['z','y', 'a'];
function containsCommonItem2(arr1, arr2){

// loop thriugh first array and create object(HashTable) where properties === items in the array
  let map = {};
  for(let i=0; i <arr1.length; i++){
    if(!map[array1[i]]){
      const item = array1[i];
      map[item] = true;
    }
  }
// loop through second array and check if item in second array exists on created object.
  for(let j=0; j < array2.length; j++){
    if(map[array2[j]]){
      return true;
    }
  }
  return false;
}
// containsCommonItem2(array1, array2);

// //O(a + b) => Time Complexity
// O(a) Space Complexity

//=======IMPROVE CODE:

function containsCommonItem3(arr1, arr2){
  return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)



Math.pow(6, 1000);

const strings = ['a','b','c','d'];
//4*4 = 16 bytes of storage

//access the array
strings[2] //O(1)

//push
strings.push('e'); // O(1)

//pop
strings.pop(); //O(1)
strings.pop();

//unshift => add in the front of the array
strings.unshift('x'); //O(n) linear

//splice add in the middle of the array
strings.splice(2, 0, 'Jazz'); //O(n)


console.log(strings)


const int = [1, 2, 3, 4, 5];

int[2] //O(1)

int.push(10)

// int.pop(4)

int.unshift(290)

int.push(300)

console.log(int)


//======Implementing An Array========
class Myarray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  //get()
  get(index){
    return this.data[index];
  }
//push()
push(item) {
  this.data[this.length] = item;
  this.length++;
  return this.length;

  }
  //pop()
  pop(){
    const lastItemRemove = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItemRemove;
  }
  //delete()
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    //return lastItem;
  } 
  //shif all numbers
  shiftItems(index){
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1]
    this.length--;
  }
} //O(n)
const newArray = new Myarray();
newArray.push('Bass');
newArray.push('Guitar');
//newArray.push('Viola');
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push('Viola2');
newArray.push('GrandPiano');

console.log(newArray);

//================Reverse String===============
function reverse(str){
  //1.check input
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'Not found the string';
  }
  //create two array
   const backwards = [];
   const totalItems = str.length -1;
   for(let i = totalItems; i >= 0; i--){
     backwards.push(str[i]);
   }
   console.log(backwards);

  return backwards.join('');
}

reverse('hello');


// 2: reverse2
function reverse2(str){
  return str.split('').reverse().join('');
}

// 3. reverse2 
const reverse3 = str => str.split('').reverse().join('');
//reverse3('Apple');

//4. reverse4 - new ES6 - Spread syntax
const reverse4 = str => [...str].reverse().join('');

//reverse4('you');

//===================BEST TIME USE Arrays=========
//1. FAST LOOKUPS
//2. FAST push/pop()
//3. ORDED

//console
//SLOW
//SLOW DELETION
// FIXED SIZE*
// *if using static array


//========Arrays-Static============//
const strings = ['a','b', 'c','d'];
//4*4 = 16 bytes of storage

//lookup
strings[2]; //O(1)

//push()
strings.push('e'); //O(1)

//pop()
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift('x'); //O(n)

//splice
strings.splice(2, 0, 'guitar'); //O(n)

console.log(strings); 

//====Static vs *Dynamic Arrays======

// reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };


//context vs. scope
// function(){
//   let a = a;
// }
const object4 = {
  a: function(){
    console.log(this);
  }
}

// instantiation

class Player {
  constructor(name, type){
    console.log(this);
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hello I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type){
    super(name, type);
  }
  play(){
    console.log(`WEEEEEEEE I'm a ${this.type}`);
  }
}

// const wizard1 = new Wizard('Mike', 'Captan');

// const wizard2 = new Wizard('Mike', 'Magic');


