// QUESTION 1
function showData() {
    console.log("Variable name is: ", name); // will print undefined value because var gets hoiseted 
    // console.log("Variable age is: ", age); --> will give reference error
    var name = "MNK";
    let age = 25;
}

showData();


// QUESTION 2
for (var i = 0; i < 4; i++) {
    // In this loop the var gets hoisted at the top so a common i variable gets created and its value will be 4 only and it will get printed 4 times on the console
    setTimeout(() => {
        console.log(i);
    }, 5)
}

for (let i = 0; i < 4; i++) {
    // let does not get hoisted so a new let variable is created in each loop printing distinct value each time 
    setTimeout(() => {
        console.log(i);
    }, 5)
}


// QUESTION 3
const income = {
    skills: 100,
    monthly() {
        return 10 * this.skills
    },
    yearly: () => {
        return 100 * this.skills
    }
}

console.log(income.monthly()); // output will be 1000
console.log(income.yearly()); // output will be NAN since its a arrow function and we are calling it with income so this value will refer to the parent of income which does not have any variable named skills


// QUESTION 4
console.log(+true); // will print 1 because + operation will try to convert the value to number
console.log(!"JS"); // will print false because ! will try to convert the value into boolean and that to inverted


// QUESTION 5
const code = {
    type: "web"
}

const reactJS = {
    name: "JS",
    web: true,
    call: "type"
}

console.log(reactJS[code.type]); // true
console.log(reactJS[reactJS["type"]]); // undefined
console.log(code[reactJS.call]); // web


// QUESTION 6
let a = {
    greeting: "Hi"
}

let z = a; // storing reference of object a, so now if i try to change using z it will work

// let z = Object.assign({}, a) -->  If we do this method insted, then object a will not be modified and "Hi" will be printed on screen

z.greeting = "Bye"
console.log(a.greeting);


// QUESTION 7
let b = 100;
let c = new Number(100);
let d = 100;

console.log(b == c);
console.log(b === d);
console.log(c === d);


// QUESTION 8
class Lizard {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor
    }

    constructor(color) {
        this.newColor = color
    }
}

const tommy = new Lizard("orange");
// console.log(tommy.colorChange("blue")); --> will not work because static methods are not available on class instance and will only work when called directly with class
console.log(Lizard.colorChange("blue"));


// QUESTION 9
let message;
masage = {
    data: 24
}

console.log(masage); // no error, because undeclared varible is added to window scope, to prevent this we can use "use strict"


// QUESTION 10 
function showModal() {
    console.log(showModal.timeout);
}

showModal(); // undefined

showModal.timeout = 100000;
showModal();


// QUESTION 11
// What are the three phases of event propagation?
// --> capturing, target, bubbling 


// QUESTION 12
function Human(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    return "I will return when the funcition is called normally"
}

const member = new Human("Mohit", "Kumar");

// Will give error, we need to define it on prototype
// Human.getName = function (){
//     return `Users name is ${this.firstName} ${this.lastName}`
// }

Human.prototype.getName = function () {
    return `Users name is ${this.firstName} ${this.lastName}`
}

console.log(member.getName());
console.log("Cons func: ", Human());


// QUESTION 13 
// Calling the above Human constructor function in two ways
// --> In this way, im calling using the new keyword, which invokes the constructor function, which returns an object so the object is returned with firstname and lastname
const methodOne = new Human("Meena", "Kumari")
console.log(methodOne);

// --> in the below method undefined is returned because the function does not return anything, but since i added the string above in the return statement, it will print the string instead
const methodTwo = Human("NO", "NEW")
console.log(methodTwo);


// QUESTION 14
function add(a, b) {
    return a + b
}

console.log(10 + "10"); //String concatenation


// QUESTION 15 --> TAGGED TEMPLATE LITERAL
function getsummary(one, two, three) {
    console.log(one); //Will return an array with fname and age as empty strings
    console.log(two); //Will return fname
    console.log(three); //Will return age
}

const fname = "Mohit";
const age = 25;

getsummary`${fname} and age is ${age}`


// QUESTION 16
function checkAge(data) {
    if (data === { age: 25 }) {
        // will return 'false' since JavaScript compares objects by reference, not value.
        console.log("Strictly equal");
    } else if (data == { age: 25 }) {
        // will return 'false' since JavaScript compares objects by reference, not value.
        console.log("data equal");
    } else {
        console.log("Hmm, not equal");
    }
}

checkAge({ age: 25 })


// QUESTION 17
function getType(...args) {
    console.log(typeof args);
}

getType(1, 2, 3); // Object


// QUESTION 18
function getAge() {
    "use strict";
    salary = 10000;
    console.log(salary);
}

// getAge() -->  will give referenceerror that salary is not defined


// QUESTION 19
var num = 8
var num = 80

console.log(num); // Vars can be redeclared


// QUESTION 20
const object = {
    1: "a",
    2: "b",
    3: "c"
}

const set = new Set([1, 2, 3, 4, 5])

console.log(object.hasOwnProperty("1")); // true
console.log(object.hasOwnProperty(1)); // true
console.log(set.has("1")); // false
console.log(set.has(1)); // true


// QUESTION 21
const objectTwo = {
    a: "10",
    b: "100",
    a: "1000"
}

console.log("Object two: ", objectTwo);


// QUESTION 22
for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i);
}


// QUESTION 23
String.prototype.getCustomString = function () {
    return "Im a custom string added to the String class"
}

const who = "Nooo"
console.log(who.getCustomString());


// QUESTION 24
const one = {};
const two = { key: "two" }
const three = { key: "three" }

one[two] = 333
one[three] = 999
console.log(one); // {[object object] : 999}
console.log(one[two]); // 999


// QUESTION 25
function sayHi() {
    return (() => 0)();
}

console.log(typeof sayHi());


// QUESTION 26
console.log(typeof typeof 1);


// QUESTION 27
const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers); // [1, 2, 3, empty × 7, 11]


// QUESTION 28
(() => {
    let x, y;
    try {
        throw new Error();
    }
    catch (x) {
        x = 1;
        y = 2;
        console.log("Inside catch: ", x); // 1
    }
    console.log("outside catch: ", x); // undefined
    console.log("outside catch: ", y); // 2
})();


// QUESTION 29
const data = [..."Apple"];
console.log(data); // ['A', 'p', 'p', 'l', 'e']


// QUESTION 30
console.log(20 + 30 + '10'); // 5010


// QUESTION 31
function getMessage() {
    throw "Custom error"
}

function sayHello() {
    try {
        const data = getMessage()
        console.log("Inside try");
    }
    catch (e) {
        console.log("Error: ", e);
    }
}

sayHello();


// QUESTION 32
console.log(parseInt('10+1')); // 10
console.log(parseInt('13vfs')); // 13
console.log(parseInt('v3vfs')); // NaN


// QUESTION 33
const print = [1, 2, 3].map(num => {
    if (num > 0) return;
    return num * 2;
});

console.log(print); // [undefined, undefined, undefined]


// QUESTION 34
function getInfo(member, year) {
    member.name = "Mohit"
    year = "1999"
}

const person = { name: "Mmohit" }
const year = "1991"

getInfo(person, year)
console.log(person, year); // {name: "Mohit"} "1991"


// QUESTION 35
function Hero() {
    this.make = "Bhagat singh"
    return { make: "Vivekanand" }
}

const myHero = new Hero();
console.log(myHero.make); // "Vivekanad" because we are explicitly returning. 


// QUESTION 36
const addIn = {}
Object.defineProperty(addIn, 'ImHidden', {
    value: "First one"
})

Object.defineProperty(addIn, 'ImVisible', {
    value: "Second one",
    enumerable: true
})

console.log(addIn.ImHidden, " and ", addIn.ImVisible); // First one  and  Second one
console.log(Object.keys(addIn)); // ImVisible


// QUESTION 37
const box = {
    x: 10,
    y: 20
}

Object.freeze(box)
const shape = box
shape.x = 100
shape.y = 200

console.log(shape); // {x: 10, y: 20}


// QUESTION 38
function addItem(item, list) {
    return list.push(item)
}
const result = addItem("Two", ["One"])
console.log(result); // 2


// QUESTION 39
let userName = "mnk"
userAge = 25

console.log(delete userName); // false
console.log(delete userAge); // true


// QUESTION 40
function* generatorFunction(i) {
    console.log("A");
    yield i;
    console.log("B");
    yield i * 2;
}

const gen = generatorFunction(10)
console.log(gen.next().value); // A 10
console.log(gen.next().value); // B 20


// QUESTION 41
async function getData() {
    return await Promise.resolve("Resolved")
}

const asyncData = getData()
asyncData.then((response) => console.log(response))


// QUESTION 42
const { fName } = { fName: "Mohit kumar" }
console.log("Name using destructuring: ", fName);

const { fName: fNameRenaming } = { fName: "Mohit kumar" }
console.log("Name using destructuring(renamed): ", fNameRenaming);


// QUESTION 43
function sumOfNum(n1, n2 = n1) {
    console.log(n1 + n2);
}
sumOfNum(10); // 20
sumOfNum(10, 40); // 50


// QUESTION 44
class Person {
    constructor(name) {
        this.name = name
    }
}
const newPerson = new Person("MNK")
console.log(typeof newPerson); // object


// QUESTION 45
let newList = [2, 3].push(4); // type is number because push returns no of elements in an array
// console.log(newList.push(5));  error --> Not a function


// QUESTION 46
function nums(a, b) {
    if (a > b) console.log("a is large");
    else console.log("b is large");
    return
    a + b;
}
nums(10, 1); // "a is large" undefined --> a+b should be next to return


// QUESTION 47
// SyntaxError: Rest parameter must be last formal parameter
// function getItems(list, ...args, moreItems){
//     return [...list, ...args , moreItems]
// }

// console.log(getItems(["berry", "apple"], "orange", "kiwi"));


// QUESTION 48
class PersonTwo {
    constructor() {
        this.name = "Rome"
    }
}

PersonTwo = class AnotherClass {
    constructor() {
        this.name = "Lovely rome"
    }
}
const memberTwo = new PersonTwo();
console.log("Member two: ", memberTwo.name); // Lovely rome


// QUESTION 49
const nameThree = "String"
// console.log(nameThree()); --> TypeError: nameThree is not a function


// QUESTION 50
let nameFour = "developer"

function getNameTwo() {
    console.log(nameFour);
    let nameFour = "developer two"
}
// getNameTwo() --> ReferenceError: Cannot access 'nameFour' before initialization


// QUESTION 51
const q = false || {} || null;
const w = null || false || '';
const e = [] || 0 || true;

console.log(q, w, e); // {} '' []


// QUESTION 52
const mom = `${(x => x)("I Love my")} mom`
console.log(mom); // I Love my mom


// QUESTION 53
let numCheck = 1
const list = ["Banana", "Orange", "Apple"]
console.log(list[numCheck += 1]); // Apple


// QUESTION 54
let randomValue = { name: "Lydia" }
randomValue = 25

if (!typeof randomValue === "string") {
    console.log("Its not a string");
}
else {
    console.log("Its a string"); // output
}


// QUESTION 55
const animals = {}
const dog = { emoji: '🐶' }
const cat = { emoji: '🐱' }

animals[dog] = { ...dog, name: "Jacky" }
animals[cat] = { ...cat, name: "Diana" }
console.log(animals); // [object object]: {emoji: '🐱', name: "Diana"}


// QUESTION 56
const user = {
    email: "abc@domain.com",
    changeEmail: email => {
        this.email = email
    }
}
user.changeEmail("newmail@domain.com")
console.log(user.email); // abc@domain.com --> because changeEmail function is an arrow function and its this will point to user objects parent, so in this case it is window
console.log(window.email);


// QUESTION 57
const fruits = ["banana", "orange", "apple"]
const sliced = fruits.slice(0, 1); // Does not modify the original array
console.log("Original fruits array: ", fruits, " --> ", sliced); // ['banana', 'orange', 'apple']  -->  ['banana']
fruits.splice(0, 1)
console.log(fruits); // ['orange', 'apple']
fruits.unshift("grapes")
console.log(fruits); // ['grapes', 'orange', 'apple']


// QUESTION 58
let count = 0
const numss = [0, 1, 2, 3]

numss.forEach(num => {
    if (num) {
        count += 1
    }
})
console.log(count); // 3


// QUESTION 59
const example = {
    name: "Front end developer",
    address: {
        city: "Abu dhabi"
    }
}
Object.freeze(example)

example.name = "Backend developer"
example.address.city = null
console.log(example); // name wont change but address.city will change to null because Object.freeze freezes object only on top level and does not freeze it in nested properties


// QUESTION 60
const exampleTwo = {
    name: "frontEnd"
}
Object.seal(exampleTwo)

exampleTwo.name = "Backend developer" // allowed on seal 
exampleTwo.proficiency = "Average" // not allowed on seal
delete exampleTwo.name // not allowed on seal
console.log(exampleTwo); // {name: 'Backend developer'}


// QUESTION 61
// Using proxy object we can detect change in our objects
const handler = {
    set: (target, property, value) => {
        console.log("Added a new property", target, property, value);
    },
    get: (target, property) => {
        console.log("Accessed a new property", target, property);
    }
}
const anon = new Proxy({}, handler)
anon.name = "Im just added now" // Added a new property {} name Im just added now
anon.name // Accessed a new property {} name


// QUESTION 62
const danger = ["Hyena", "Lion"];
({ item: danger[2] } = { item: "Tiger" });
console.log(danger); // ['Hyena', 'Lion', 'Tiger']


// QUESTION 63
const myFunc = ({ x, y, z }) => {
    // const {x, y, z} = 1 --> js will interpret this way for myFunc(1, 2, 3)
    console.log(x, y, z);
}
myFunc(1, 2, 3) // undefined undefined undefined


// QUESTION 64
const FOO = "FrontEndMaster"
console.log(!typeof FOO == "object"); // false
console.log(!typeof FOO == "string"); // false


// QUESTION 65
const curriedAdd = x => y => z => {
    return x + y + z
}
console.log(curriedAdd(10)(20)(30)); // 60


// QUESTION 66
const groceries = ["Chips", "Cake"]
if (groceries.indexOf("Chips")) {
    console.log("I wont print because ill return 0 which is a falsy value");
} else {
    console.log("I will print because ill return 1 which is a truthy value");
}


// QUESTION 67
const expObj = { name: "JS" }
expObj.ref = expObj

// const str = JSON.stringify(expObj)
// console.log(str); 
// TypeError: Converting circular structure to JSON
// --> starting at object with constructor 'Object'
// --- property 'ref' closes the circle


// QUESTION 68
var magic = 900
function magic() {
    console.log("Magic inside function");
}

console.log(magic); // 900 --> first function gets hoisted because it has higher priority, then var gets declare, then var gets initialized to 900, therefore the output is 900


// QUESTION 69
let y = z = {}
z.name = "YAY"
console.log(y.name); // YAY --> because y and z are pointing to the same object


// QUESTION 70
function task() {
    return new Promise(resolve => {
        resolve("data")
    })
}
const output = task().then()
console.log(output); // Promise {<pending>} --> because we are not explicitly returning anything inside the then block


// QUESTION 71
console.log(1);
new Promise(function (res) { console.log(2) })
console.log(3);
// 1 2 3


// QUESTION 72
const dataMap = new WeakMap();
let anonPerson = { name: "JS" };

dataMap.set(anonPerson, "TVA") // {key: {name: "JS"}: value: "TVA"}
console.log(dataMap.get(anonPerson)); // TVA
anonPerson = null; //Nullifying anonPerson: You set anonPerson to null. This makes the original {name: "JS"} object eligible for garbage collection since WeakMap does not prevent its keys from being garbage collected.
console.log(dataMap.get(anonPerson)); // undefined --> When you attempt to get the value associated with null, it returns undefined because the WeakMap no longer holds a reference to the original object.


// QUESTION 73
const foo = function test() {
    console.log("Inside test");
}

// test() --> ReferenceError: test is not defined


// QUESTION 74
againTest(); // test again function
// test() --> ReferenceError: test is not defined

const test = function () {
    console.log("test function");
}

function againTest() {
    console.log("test again function");
}


// QUESTION 75
const data1 = ["C", "B", "A"];
const data2 = ["Z", "Y", "X"];

const dataUsingToSorted = data1.toSorted(); // Returns a new array and does not modify the original array
data2.sort(); // Modifies the original array

console.log("data1: ", data1); // ['C', 'B', 'A']
console.log("data1 new array: ", dataUsingToSorted); // ['A', 'B', 'C']
console.log("data2: ", data2); // ['X', 'Y', 'Z']


// QUESTION 76
const dataUsingToReversed = data1.toSorted(); // Returns a new array and does not modify the original array
data2.reverse(); // Modifies the original array

console.log("data1: ", data1); // ['C', 'B', 'A']
console.log("data1 new array: ", dataUsingToReversed); // ['A', 'B', 'C']
console.log("data2: ", data2); // ['Z', 'Y', 'X']


// QUESTION 77
const arr = [, , ,];
console.log(arr); // [empty × 3]


// QUESTION 78
let s = 10
let g = "A";

[g, s] = [s, g]
console.log("g: ", g, "and s: ", s); //g:  10 and s:  A


// QUESTION 79
// let p = [typeof p, typeof m] --> execution will be from right to left, m will be undefined, and p will give the above reference error
// console.log(p); --> ReferenceError: Cannot access 'p' before initialization


// QUESTION 80
const [first, ...second] = [1, 2, 3, 4]
console.log("first: ", first); // first:  1
console.log("second: ", second); // second: (3) [2, 3, 4]


// QUESTION 81
var myAge = 25;
console.log(window.myAge); // 25 --> variable is in global scope and gets added to the window object


// QUESTION 82
let string = "JS";
string[0] = "N";
string[1] = "O";

console.log(string); // JS --> because in js strings are immutable


// QUESTION 83
let str2 = new String("JS");
console.log(str2 === "JS"); // false
console.log(str2 == "JS"); // true


// QUESTION 84
const myObj = {};
myObj[myObj["A"] = "B"] = "C";
console.log(myObj); // {A: 'B', B: 'C'}


// QUESTION 85
const arr2 = [1, 2, 3];
console.log(arr[5]); // undefined


// QUESTION 86
function init(x, y, z) { };
function end(a, b = 0, c) { };
console.log(init.length); // 3
console.log(end.length); // 1 --> because we have defined a default parameter which does not get included in the length and all the parameter after the default parameter are automatically converted to optional parameter 


// QUESTION 87
const ShowLang = {
    lang: "Hindi",
    show: function () {
        console.log(`Majority of indian speaks ${this.lang} language`);
    }
}

ShowLang.show();
let viewLang = ShowLang.show
viewLang()


// QUESTION 88
// if(function fn() {}){
//     console.log(fn); --> ReferenceError: fn is not defined because whatever is written in the if block gets garbage collected after its execution and does not exist in the memory
// }


// QUESTION 89
console.log(99["toString"].length); // 1
console.log(99["toString"].length + 1); // 2


// QUESTION 90
console.log(4 + "4"); // '44'
console.log(4 + +"4"); // 8 --> +'4' will convert the string to number


// QUESTION 91
console.log(typeof jsIsAwesome); // the only place where we'll get undefined for undeclared variable. in other place we will get reference error


// QUESTION 92
const info = new Array("Personal info");
// Unoptimized way
for (let i = 0; i < info.length; i++) {/* Some code */ }
// Optimized way
let len = info.length
for (let i = 0; i < len; i++) {/* Some code */ }


// QUESTION 93
function sum() {
    return 2 + 2
}

function sqr() {
    return 4 * 4
}

const sumCumSqr = (sum(), sqr()); // We can evaluate expression using ',' execution will be from left to right and the last one will be evaluated
console.log(sumCumSqr); // 16



// QUESTION 94
const obj = { name: "X" }
delete obj.name
// obj?.name = "Y" --> Invalid, cannot check using optional chaining while setting a value


// QUESTION 95
const lifeSpan = {
    99: "Impressive" // 99 will be converted to string since keys in obj can only be string or symbol
}
// lifeSpan.100 = "Rocket" --> SyntaxError: Unexpected number
lifeSpan[100] = "Rocket"
console.log(lifeSpan);


// QUESTION 96
const arr3 = ['ab', 'cd', 'ef'];
const str3 = "abcde"
console.log(str3.includes('a')); // true
console.log(arr3.includes('a')); // false


// QUESTION 97
console.log(888888888888888888); // 888888888888888800


// QUESTION 98
console.log(false == []); // false == '' --> 0 == 0


// QUESTION 99
function showTwo() {
    {
        var x = 999;
        var y = 888;

        // If i put this var inside IIFE then it'll give reference error
        //    (function(){
        //     var x = 999;
        //     var y = 888;
        //    })();
    }
    console.log(x, y);
}

showTwo()


// QUESTION 100
console.log("A"); // Prints first

(async function(){
    const x = await 5;
    console.log(("C")); // Prints third
})();

console.log("B"); // Prints second


// QUESTION 101
let num1 = 10;
let num2 = 20;

let num3 = 30 - (num1 = num2 + 10);
console.log(`NUM3 : ${num3}`); // 0


// QUESTION 102
// Make the length 0
const arr4 = [1, 2, 3, 4];
arr4.splice(0, 4)
console.log("ARR4 length: ", arr4.length);


// QUESTION 103
function SuperHero(){
    this.hero = "SilverSurfer";
    
    return {hero: "NorenRed"}
}
const hero1 = new SuperHero();
console.log(hero1); // {hero: "NorenRed"}


// QUESTION 104
console.log(-0 == 0); // true
console.log(-0 === 0); // true
console.log(Object.is(-0, 0)); // false --> Object.is compared -0 and nan effectively


// QUESTION 105
// Create a function without using function keyword and arrow function

const com = 10;
const com2 = 20;

const comAdd = new Function('a', 'b', 'console.log(a + b);')
comAdd(22, 11); // 33


// QUESTION 106
// Statically typed language are Java and C where we define the variable type before hand. During compile time itself the types are assigned to the variables
// Dynamically typed language is JavaScript,  where we do not need to define the variable type before hand. During run time itself the types are assigned to the variables


// QUESTION 107
const key2 = "constructor";
const obj2 = {};

if(obj2[key2] && key2 in obj2){
    console.log("Hello Admin"); // This will be the output because even if the object is empty, for the two if conditions it will go look in the prototype chain and will find the key there, thats the reason this is the output. we can solve this by using obj2.hasOwnProperty(key2)
} else{
    console.log("Hello Guest");
}

console.dir(obj2);


// QUESTION 108
// Find out the character count inside the string
const string2 = 'hare krishna hare krishna krishna hare hare';
const countObject = {}
for(let i of string2){
    if(countObject[i]){
        countObject[i] += 1;
    }
    else{
        countObject[i] = 1;
    }
}
console.log(countObject);


// QUESTION 109
// QUESTION 110
// QUESTION 111
// QUESTION 112
// QUESTION 113
// QUESTION 114
// QUESTION 115
// QUESTION 116
// QUESTION 117
// QUESTION 118
// QUESTION 119
// QUESTION 120
// QUESTION 121
// QUESTION 122
// QUESTION 123
// QUESTION 124
// QUESTION 125
// QUESTION 126
// QUESTION 127
// QUESTION 128
// QUESTION 129
// QUESTION 130
// QUESTION 131
// QUESTION 132
// QUESTION 133
// QUESTION 134
// QUESTION 135
// QUESTION 136
// QUESTION 137
// QUESTION 138
// QUESTION 139
// QUESTION 140
// QUESTION 141
// QUESTION 142
// QUESTION 143
// QUESTION 144
// QUESTION 145
// QUESTION 146
// QUESTION 147
// QUESTION 148
// QUESTION 149
// QUESTION 150





