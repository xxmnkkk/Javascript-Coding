/* BIND */
// The bind() method creates a new function and when that new function is called it set this keyword to the first argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument are passed to the bind method then they are passed as an argument to the new function when the new function is called.

console.log("Window.name: ", window.name);

this.name = "Global Name";

function test() {
    console.log(this.name);
}

const obj = {
    name: "Mohit",
    test: test
}

// will print the global name
test();

// will print the object property name
obj.test();

// using bind, test will have the this of obj and not the global this.
const testBoundedToObject = test.bind(obj);
testBoundedToObject();

console.log("-----");



/* CALL */
// The call() method calls the function directly and sets this to the first argument passed to the call method and if any other sequences of arguments preceding the first argument are passed to the call method then they are passed as an argument to the function.

// It binds and calls, no need to store in a varibale and call later, just write it and it gets done.
test.call(obj);

const person = {
    name: "Mohit",
}

function add(a, b){
    console.log(`${this.name} is adding ${a} and ${b} and the result is ${a + b}`);
}

add.call(person, 23, 43);





/* APPLY */
// In case of apply, instead of comma seperated values, we pass array.
add.apply(person, [23, 43]);
