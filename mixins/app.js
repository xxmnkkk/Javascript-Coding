// Theres a condition in inheritance, we face problem in doing multiple inheritance, there is ambiguity error which means which one to inherit.
// I want to selectly put digest in classes i want, i can do it using mixins

const digest = {
    eat: () => {
        console.log("Eat Food");
    },

    shit: () => {
        console.log("You Shit")
    }
}

const sleep = {
    sleep: () => {
        console.log("Go to sleep");
    }
}

class Animal {
    constructor(isAlive) {
        this.isAlive = isAlive;
    }
 
    gatherFood() {
        console.log("Collect Food");
    }
}

class Dog extends Animal {
    constructor(isAlive, name, age){
        super(isAlive);
        this.name = name;
        this.age = age;
    }
 
    bark() {
        console.log("The dog barks");
    }
}

// Object.assign(Dog.prototype, digest); //OR  ==>
Object.assign(Dog.prototype, {...digest, ...sleep});

const dog1 = new Dog(true, "Jacky", 4);
console.dir(dog1);
dog1.gatherFood()
dog1.bark()