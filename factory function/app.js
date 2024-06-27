// factory functions are simple functions that you call by passing arguments
// factory creates generic object, no hiererchy
// It creates a person of type object while a constructor function will create a person of type Person

function createPerson(name, age){
    return {
        name: name,
        age: age,
    };
};

const newPerson = createPerson("Mohit", 24);
console.log(newPerson);
console.dir(newPerson);


// below is a person created with constructor function
function Person(name, age){
    this.name = name;
    this.age = age;

    return this;
}

const mohit = new Person("Mohit", 24);
console.log(mohit);



console.dir(mohit instanceof Person);
console.dir(newPerson instanceof createPerson);
console.dir(newPerson instanceof Object);


