const obj = {
    name: "Mohit",
    age: 23,
    id: 3,
    key:24
}

// there are two ways to access the objects properties
// dot notation and bracket notation

// this will print name
console.log(obj.name)

// now if we store the property of age in key and print obj.key it will print 24
const key = "age";
console.log(obj.key);

// to print the value of key = "age" we use bracket notation
console.log(obj[key]);


// Objects are unordered and Arrays are ordered.





/* In the below code, as the areaCopy stores the 
primitive value, it cannot be modified in the original object */
const person = {
    name: "Mohit",
    age: 23,
    address: {
        area: "Delhi",
        houseNo: 86
    }
}

let areaCopy = person.address.area;
areaCopy = "Dubai";
console.log(person.address.area);

/* In the below code, as the areaCopy stores the 
address of the area, it can be modified in the original object */
const person2 = {
    name: "Mohit",
    age: 23,
    address: {
        area: {name: "Delhi"},
        houseNo: 86,
    },
};

let areaCopy2 = person2.address.area;
areaCopy2.name = "Dubai";
console.log(person2.address.area.name);



// Javascript is single threaded, but browser is multi threaded
// whenever we get a array back from DOM, it'll either be a nodeList or HTMLCollection.
// querySelector will always return HTMLCollection
// querySelectorAll will always return nodeList



// to get the set of keys in the object
console.log(Object.keys(person2));

// to get the set of values in the object
console.log(Object.values(person2));

// to get the set of keys and values in the object
console.log(Object.entries(person2));