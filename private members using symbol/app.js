// class Dog {
//     #dogId; //Private
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.#dogId = 1;
//     }
// }

// Everytime we create a symbol, it is a unique symbol, it can never be compared
const symbol1 = Symbol("test");
const symbol2 = Symbol("test");
const obj = {
  [symbol1]:  1,
  [symbol1]: 2,
}
console.log(obj[symbol1]);
console.log(symbol1 === symbol2);




const Dog = function () {
  let dogIdSymbol = Symbol("dogId");
  this.name = "tommy";
  this.age = 2;
  this[dogIdSymbol] = 1;

  this.getDogId = function () {
    return this[dogIdSymbol];
  };
};

const dog = new Dog();
let dogIdSymbol = Symbol("dogId");
console.log(dog.dogIdSymbol);
console.log(dog.getDogId());