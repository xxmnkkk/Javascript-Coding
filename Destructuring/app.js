// Array Destructuring
const arr =  ["Mohit", "Kumar"];
const [firstName, LastName] = arr;

console.log(firstName);
console.log(LastName);

// Object Destructuring 
const obj = {
    name: "Mohit Kumar",
    age: 24
}
const {name: fullName , age: fullAge} = obj;

console.log(fullName , " " , fullAge);
