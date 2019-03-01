const fish = ['dory', 'bruce', 'marlin', 'nemo'];
const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank','nemo'];
const large = new Array(100000).fill('nemo');

function findNemo2(fish) {
  // let t0 = performance.now();
  for (let i = 0; i < fish.length; i++) {
      console.log('running')
    if (fish[i] === 'nemo') {
      console.log('Found NEMO!');
      break;
    }
  }
  // let t1 = performance.now();
  // console.log("Call to find Nemo took " + (t1 - t0) + " milliseconds.");
}

findNemo2(everyone)// O(n) --> Linear Time


//==================array.forEach(element => {
    const findNemo2 = array => {
        array.forEach(fish => {  // same as => for (let i = 0; i < fish.length; i++)
            if(fish === 'nemo'){
                console.log("Found Nemo!")
            }
        })
    }

    const findNemo3 = array => {
        for(let fish of array) {
            if(fish === 'nemo'){
                console.log("Found Nemo!")
            }
         }
    }
    

    findNemo2(everyone)
    findNemo3(everyone)


});

// =========================O(1)  -> Constant Time ============
const boxes = [0, 1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]);// O(1)
  
  }
  
  logFirstTwoBoxes(boxes) // O(1)  -> Constant Time

// =======================Exercise: Big O Calculation============

function funcChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3;//O(1)

    for (let i = 0; i < input.length;  i++){//O(n)
        anotherFunction();//O(n)
        let stranger = true;//O(n)
        a++;//O(n)
        return a;//O(1)
    }
}



let a = 5;//O(1)
let b = 10;//O(1)
let c = 50;//O(1)
for (let i = 0; i < input; i++) { 
  let x = i + 1; //O(n)
  let y = i + 2;//O(n)
  let z = i + 3;//O(n)

}
for (let j = 0; j < input; j++) { 
  let p = j * 2;//O(n)
  let q = j * 2;//O(n)
}
let whoAmI = "I don't know"; // O(1)
}

//BIG O (4 + 5n) = O(n)

// log all pairs of Array
const boxes = ['a', 'b','c','d','e'];

function logAllPAirsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j]);
        }

    }
}
logAllPAirsOfArray(boxes);//O(n^2) = O(n2) => Qudratic Time

//------------------------

'hellosjsjsjsjssjshdhd'.length // 0(1) =>in javascript