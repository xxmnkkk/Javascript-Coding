// spread and rest operator (...), with object and array it is called spread, inside a function it is called rest.


// SPREAD OPERATOR

const person = {
    name: "Mohit"
}

const address = {
    area: "Dubai"
}

const data = {...person, ...address};
console.log(data);


// the below, is a way to make a real copy of the object
// {} will make new memory location 

const obj = {
    name: "Mohit",
    age: 23
}

const objCopy = {...obj};
objCopy.age = 25;

console.log(obj);
console.log(objCopy);


// if two object have same property, then the last one will override  

const obj1 = {
    name: "mohit"
}

const obj2 = {
    name: "mnk"
}

const objsCopy = {...obj1, ...obj2};
console.log(objsCopy);

const objsCopy2 = {...obj1, ...obj2, name: "MNK the Great"};
console.log(objsCopy2);


// Copy of nested object

const person2 ={
    name: "Mohit",
    address: {
        area: "Delhi"
    }
}

const person2Copy = {...person2, address:{...person2.address}, name: "MNK"}
person2Copy.address.area = "Abu Dhabi";
console.log(person2Copy);


// Array concat

const arr = [1,2,3];
const arr2 = [4,5,6];
const arrCopy = [...arr, ...arr2, 6,7,8,9];
console.log(arrCopy);






// REST OPERATOR

function add(...arrayOfNumbers) {
    let sum = 0;
    for(element of arrayOfNumbers){
        sum += element;
    }
    return sum;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));