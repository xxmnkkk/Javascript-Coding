// In java there is no class, even if a class is defined in the code it is not a class. It is something called prototypal inheritance. It is not same as java. If we write class in JS, it is something called Syntactical Sugar.

/*
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
*/

// Javascript has a concept of something called constructor function.
// Constructor functions are define with the first letter as capital in the constructor name.
// They use this to refer to the new object, and they are called with a new keyword.
function Person(name, age){
    this.name = name;
    this.age = age;

    // Attribute function
    this.getAge = function () {
        return this.age;
    }

    return this;
}

// When we call a constructor function with new keyword, an empty object gets created (const this = {}).
const mohit = new Person("Mohit", 24);
console.log(mohit);







// In ES6, a new way was added, this is basically syntactical sugar
// Initially we have to write the constructor and its function like below
function MyConstructor(name) {
    this.name = name;
}

MyConstructor.prototype.myName = function() {
    console.log(this.name);
}

const person = new MyConstructor("Mohit");
// output is Mohit and then undefined because, it first console.log which is Mohit, and then it prints the return value og myName function, which is undefined;
console.log(person.myName());

// simply calling the function will not print the undefined value.
person.myName();