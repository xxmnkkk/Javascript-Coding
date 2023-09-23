// String to Object
const string = '{"name": "Mohit", "age": 24, "isStupid": true}';
const jsonObject = JSON.parse(string);
console.log(jsonObject);



// Object to String
const object = {
    name: "Mohit",
    age: 24,
    isStupid: true
}
const jsonString = JSON.stringify(object);
console.log(jsonString);