// JavaScript was created by Brendan Eich in 1995 during his time at Netscape Communications. Initially it was developed under the name Mocha, but later the language was officially called LiveScript when it first shipped in beta releases of Netscape.

// The way javascript is written is to make it less complicated, so it runs on a single processor. Basically it is single threaded.

/*
    Types- 

    1. Primitive Types 
    - String - 'hi', "hi", `hi`
    - Number - any operation that does not produce a  mathematical operation returns NaN (not a number).
    - Boolean
    - Undefined
    - null
    - BigInt (don't care)
    - Symbol (don't care)

    2. Non-Primitive Types
    - Object - unordered collection of data
    - Array - they are basically objects in javascript. It is basically an object that is logically ordered.


    if(value){
    }

    if the value is any of the below values, then the result will always be false. these values are called as falsy values.
    - null
    - undefined 
    - false
    - NaN
    - 0
    - -0
    - ""

    if we write any values except the above, then the result will be true.
*/

// TYPE COERCION
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc.


const a = "23";
const b = 23;
// it will try to convert b from number to string
const c = a + b;
console.log(c);
console.log(typeof c);

// Because unary + operation works only on number, it will convert x into a number and console.log it. The purple color in the console represents that it is a number. If we try to do the same operation in any string name which cannot be converted into a number, it will console.log NaN which itself is a number. 
const x = "55";
console.log(+x);

const y = "Mohit";
console.log(+y);

// NaN + any number will give back NaN
console.log(NaN + 23);



// Array
const array = ["tomato", "potato", "mushroom"];
console.log(array);
console.log(Object.keys(array));

// array.push() and array.pop() are the operations to purform on the end of the array

// unShift will add in the start of the array
array.unshift("chicken");
console.log(array);

// shift will remove form the start of the array
array.shift();
console.log(array);


// parseInt and parseFloat
const num = "43.43";
console.log(parseInt(num));
console.log(parseFloat(num));


// Bitwise operation
const m = 2; // 10
const n = 1; // 01
console.log(m & n);

// Logical operation
const o = 2; // 10
const p = 1; // 01
if (o && p) {
    console.log("true");
};

// Short Circuit Evaluation in case of and
// Only if isEighteen is true, serveDrinks() will execute
const name = "Mohit";
const isEighteen = true;
let noOfDrinks = 0;

function serveDrinks() {
    noOfDrinks = noOfDrinks + 1;
    return noOfDrinks;
}

isAllowedToDrink = isEighteen && serveDrinks();
console.log(isAllowedToDrink);

// Short Circuit Evaluation in case of or
// store1 will evaluate, if true it will execute, else store 2 will be evaluated
function store1() {
    console.log("store1");
    return false;
}

function store2() {
    console.log("store2");
    return true;
}

const store = store1() || store2();
console.log(store);




// hasOwnProperty on array is used to check whether a key is present in a array or not
const newArray = [1,2,3,4];
console.log(newArray.hasOwnProperty("test"));
newArray.test = "I am added now";
console.log(newArray.hasOwnProperty("test"));
console.log(newArray);