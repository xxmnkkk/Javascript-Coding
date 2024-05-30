// Expression
const expression = 1 + 2;

// Declaration
let declare;

// Assignment
let assign = "Assigned value";


// Function declaration
function test() {
    console.log("test");
}
test();

// Function expression
const test2 = function() {
    console.log("test2");
}
test2();

// Arrow function - can only be used as expression
const test3 = () => {
    console.log("test3");
}
test3();

// One parameter, we can ignore the ()
const test4 = para1 => para1;
console.log(test4("hello"));