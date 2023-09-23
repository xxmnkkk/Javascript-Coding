// Every function has a prototype property, which itself is an object, which has a constructor function that has the reference to the original function.
// Every object has a __proto__ / [[Prototype]] property

// function
function sayName(name){
    console.log(`My name is ${name}`);
}

console.dir(sayName);

// object
const person = {
    name: "Mohit",
    age: 23,
};

console.log(person);





// 
function Person(name, age){
    this.name = name;
    this.age = age;

    /*
    Instead of creating a function here, it is better to define the function property using Object.prototype method, this will ensure that when ever the object is created, it does not create copy of the function over and over again.
    
    this.getAge = function () {
        return this.age;
    }

    return this;

    the same function is defined outside the Person constructor function
    */
}

Person.prototype.getAge = function () {
    return this.age;
}

const person1 = new Person("Mohit", 24);
const person2 = new Person("Sumit", 22);

console.log(person1, person2.getAge());






// In arrays, [1,2,3].[[Prototype]] === Array.prototype




// Monkey Patching
// It is using prototypal inheritance used to add new key which adds new functionality.
// It is not recommended

Array.prototype.helloMohit = () => {
    console.log("Hello my name is Mohit");
}

[1,2,3].helloMohit();




// Linked list are Abstract Data Structures (ADT).