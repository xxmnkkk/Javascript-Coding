const Animal = function(name, age) {
    this.name = name;
    this.age = age;
};

Animal.prototype.eat = function() {
    console.log("Animal is eating");
}

Animal.prototype.sleep = function() {
    console.log("Animal is sleeping");
}

const Dog = function(name, age, breed) {
    // Just like calling super inside of a class we can do the below
    Animal.call(this, name, age);
    this.breed = breed;
}

// Dog[[prototype]] = Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Jacky", 4, "Bully");
console.dir(dog);