// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

/* hoisting */

test();

// var can be accessed before it reaches line number 17, but it will be always undefined
console.log(a);


// TDZ
// A temporal dead zone (TDZ) is the block where a variable is inaccessible until the moment the computer initializes it with a value.
// console.log(c); //tdz
// console.log(b); //tdz

console.log(test2);
// test2();

var a = 2;
let b = 2;
const c = 2;

// function declaration
function test() {
  console.log("test function");
}

// function expression
var test2 = function () {
    console.log("test2");
};


/* creation phase */

//  memory allocation

//  a = undefined
//  b = undefined
//  c = undefined
//  test = function
//  test2 = undefined


// 2 const
// 1 function
// 1 var
// 1 let

/* execution phase */

// running the code line by line



a= 5;
console.log(a);
