// log all pairs of Array
const boxes = ['a', 'b','c','d','e'];

function logAllPAirsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }

    }
}
logAllPAirsOfArray(boxes); //O(n^2)


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

===============BETTER SOLUTION:

array1 == > obj {

a: true
b: true
c: true
x: true
}
array2[index] === obj.
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


class MyArray {
    constructor(){
        this.length = 0;
        this.data= {};
    }
    //get
    get(index) {
        return this.data[data]
    }
    //push
    push(item) {
      this.data[this.length] = item;
      this.length++
      return this.lenth;
    }

    //pop
    pop(){
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem;
    }

    //delete
    delete(index) {
      const item = this.data[index];
      this.shiftItems(index);
       return lastItem;
    }
    shiftItems(index){
      for(let i = index; i < this.length -1; i++){
        this.data[i] = this.data[i+1];
      }
      delete this.data[this.length-1];
      this.length--;
    }
}

const newArray = new MyArray();
newArray.push('Sergio');
newArray.push('Rosa');
newArray.push('!');
// newArray.pop();
// newArray.pop();
newArray.delete(0)
newArray.push('Boston');
newArray.push('New York');
newArray.delete(2)
console.log(newArray);
