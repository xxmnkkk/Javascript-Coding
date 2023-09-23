// In Object.defineProperty, enemuerable will allow the property to be hidden, but it exists. It will still show when we console.log it.
const object = {
    name: "Mohit",
    age: 24,
};

Object.defineProperty(object, "sexuality", {
    value: "male",
    enumerable: false,
});

console.log(object);
console.log(object.sexuality);