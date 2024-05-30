// If we console log this, its value will be Window
console.log(this);

// If a function is called as is, again its value will be Window(It will give global object in node)
function test() {
    console.log(this);
}

test();


// If a function is called with an object, this will have the whole object
const obj = {
    name: "Mohit",
    age: 24,
    sayDetails: function(){
        console.log(this.name, this.age);
        return 23;
    },
};

console.log(obj.sayDetails);
obj.sayDetails();

const print = obj.sayDetails();
console.log(print);

// we are storing the copy of obj.sayDetails in functionCopy
// we do not call the functionCopy using obj so the value will be undefined
const funcCopy = obj.sayDetails;
funcCopy();

// now if we store the objsayDetails with () in functionCopy2, the when we console log it, it will return what ever is returned in the function inside og obj. If nothing is returned, then it will be undefined.
const functionCopy = obj.sayDetails();
console.log(functionCopy);

// It is important how you call the function.





// Arrow functions does not have a this and it cannot be assigned a this
// Arrow function adopts the lexical this

// This is arrow function
const arrow = () => {
  // window or global
  console.log(this.name);
};

function normalFunction() {
  console.log(this.name);
}

const obj2 = {
  name: "potato",
  test : {
    name: "bounded name",
  },
  arrow: arrow,
  normalFunction: normalFunction,
};

test = {
  name: "bounded name",
};

// Output will be -
// undefined
// potato
obj2.arrow();
obj2.normalFunction();

// Output will be -
// undefined
// bounded name
arrow.call(test);
normalFunction.call(test);

console.log("-------");


// In the below case, a normal function barkAfterSeconds will not display the value of this
class Dog {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    bark() {
        console.log(`${this.name} barked`);
    }

    // If we call a normal function with this, its value will be window, the case is same here, this is being called after one seconds and the function does not have access to this. To solve this we can use arrow function here or we can implement bind. Arrow function will work here because it has access to the lexial this, barkAfterSeconds is called with the object, so it has access to the name.
    barkAfterSeconds(sec) {
        setTimeout(function () {
            console.log(`${this.name} barked`);
        }, sec * 1000);

        const boundedFunction = this.bark.bind(this);
        setTimeout(boundedFunction => {
            console.log(`${this.name} barked in binded function`)
        }, sec * 2000);

        setTimeout(() => {
            console.log(`${this.name} barked in arrow function`)
        }, sec * 3000);
    }
}

const dog1 = new Dog("Jacky", 4);
dog1.bark();
dog1.barkAfterSeconds(1);



const object = {
    name: "Mohit",
}