class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    // Overriding 
    eat() {
        console.log("Dog is eating");
    }

    bark() {
        console.log("Dog is barking");
    }
}

const dog = new Dog("Jacky", 4, "Bully");
console.log(dog);
dog.eat(); 