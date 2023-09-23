// A function which can take a function as an parameter and return a function is called FIRST CLASS FUNCTION
// 1. function should be passed as an argument
// 2. function should be able to be returned from another function

function test(myFunction){
    return () => {
        myFunction();
    }
}

function print(name){
    console.log("My name is " + name);
}

test(print("Mohit"));

// These properties are necessary for CLOSURE


// Below is a function which returns a arrow function.
function sayHelloMaker(name) {
    return () => {
        console.log("Hello " + name);
    }
}

// sayHelloMaker("Mohit") will return a function to sayHello, it will not return console.
const sayHello = sayHelloMaker("Mohit");

console.dir(sayHelloMaker);

// calling the sayHello function again will console.log Hello Mohit.
console.dir(sayHello);

/* 
CLOSURE is a feature of javascript that allows inner functions to access the outer 
scope of a function. Closure helps in binding a function to its outer boundary and 
is created automatically whenever a function is created. The function should return 
a function in order for this to happen automatically. 
*/