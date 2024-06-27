globalVariable = "I'm global variable"

window.onload = function () {
    console.log("I'm running after the window has loaded");
}


let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}
let carProps = {
    type: {
        value: 'Volkswagen'
    },
    model: {
        value: 'Golf'
    }
}

var car = Object.create(vehicle, carProps);
console.log(car);
console.log(car.fuelType);





const orgObject = { company: 'XYZ Corp' };
const carObject = { name: 'Toyota' };
const staff = Object.assign({}, orgObject, carObject);
console.log("Staffs: ", staff);




// You can redeclare a variable using var, but not with let or const



// 0 == false   // true
// 0 === false  // false
// 1 == "1"     // true
// 1 === "1"    // false
// null == undefined // true
// null === undefined // false
// '0' == false // true
// '0' === false // false
// NaN == NaN or NaN === NaN // false
// []==[] or []===[] //false, refer different objects in memory
// {}=={} or {}==={} //false, refer different objects in memory


// IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
(function () {
    var message = "IIFE";
    console.log(message);
})();
// console.log(message); //Error: message is not defined



// The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.
// function callbackFunction(name) {
//     console.log("Hello " + name);
// }

// function outerFunction(callback) {
//     let name = prompt("Please enter your name.");
//     callback(name);
// }

// outerFunction(callbackFunction);



// Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc





// The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, it will be true. For example, you can test IE version using this expression as below,

let isIE8 = false;
isIE8 = !!navigator.userAgent.match(/MSIE 8.0/);
console.log(isIE8); // returns true or false





// The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

console.log(eval("1 + 2")); //  3





// How to detect if capslock is turned on/off

function enterInput(e) {
    var flag = e.getModifierState("CapsLock");
    if (flag) {
        document.getElementById("feedback").innerHTML = "CapsLock activated";
    } else {
        document.getElementById("feedback").innerHTML =
            "CapsLock not activated";
    }
}




// IsFinite Function
// The isFinite() function is used to determine whether a number is a finite, legal number. It returns false if the value is +infinity, -infinity, or NaN (Not-a-Number), otherwise it returns true.

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite(100)); // true
console.log(isFinite('mnk')); // false 
console.log(isFinite('100')); // true




// Event flow is the order in which event is received on the web page. When you click an element that is nested in various other elements, before your click actually reaches its destination, or target element, it must trigger the click event for each of its parent elements first, starting at the top with the global window object.

// There are two ways of event flow

// Top to Bottom(Event Capturing)
// Event capturing is a type of event propagation where the event is first captured by the outermost element, and then successively triggers on the descendants (children) of the target element in the same nesting hierarchy till it reaches the innermost target DOM element.You need to pass true value for addEventListener method to trigger event handlers in event capturing phase.

// Bottom to Top (Event Bubbling)
// Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element(i.e, global window object).



// The window.navigator object contains information about the visitor's browser OS details. Some of the OS properties are available under platform property
console.log(navigator.platform);




// The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).




// The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

// CORS is a mechanism that allows web servers to specify who can access their resources by sending specific HTTP headers. This mechanism allows a server to relax the SOP restrictions and permit cross-origin requests.






// Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.

// For example, if you wanted to detect field changes inside a specific form, you can use event delegation technique,

// var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
// form.addEventListener(
//   "input",
//   function (event) {
//     // Log the field that was changed
//     console.log(event.target);
//   },
//   false
// );





// The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. So execution is paused at the debugger statement just like a breakpoint in the script source.
// You can set breakpoints in the javascript code once the debugger statement is executed and the debugger window pops up. At each breakpoint, javascript will stop executing, and let you examine the JavaScript values. After examining values, you can resume the execution of code using the play button.

// debugger;




// Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.




// In vanilla javascript, you can redirect to a new page using the location property of window object. The syntax would be as follows,

// function redirect() {
//   window.location.href = "newPage.html";
// }

console.log("location.href", window.location.href); // Returns full URL
console.log("location.pathname", window.location.pathname); // Returns full pathname



// You can use hasOwnProperty to particularly test for properties of the object instance (and not inherited properties)
const propertyExistOrNot = vehicle.hasOwnProperty("wheels"); // true
console.log("Has property: ", propertyExistOrNot);

for (var key in vehicle) {
    if (vehicle.hasOwnProperty(key)) {
        console.log(key + " -> " + vehicle[key]);
    }
}





// Arguments Object
// The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function

function sum() {
    let total = 0;

    for (let num in arguments) {
        total += arguments[num]
    }

    return total
}

console.log("Sum: ", sum(1, 2, 3, 4));





// First letter of string to uppercase
function convertFirstLetterToUppercase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

console.log("String to uppercase: ", convertFirstLetterToUppercase("mnk"));

// To find the number of parameters accepted by a function
console.log("Number of parameters accepted by convertFirstLetterToUppercase function: ", convertFirstLetterToUppercase.length);




// Current date
const today = new Date();
console.log("Date: ", today.toString().slice(4, 15));




// How do you check if a string starts with another string
const string = "Good morning".startsWith("Good");
console.log("String starts with: ", string);


// How do you trim a string
console.log("  Hello World   ", "  ->  ", "  Hello World   ".trim());



// You can define multiline string literals using the '\n' character followed by line terminator('').
var str = "This is a \nvery lengthy \n sentence!";
console.log(str);




// What is an app shell model
// An application shell (or app shell) architecture is one way to build a Progressive Web App that reliably and instantly loads on your users' screens, similar to what you see in native applications. It is useful for getting some initial HTML to the screen fast without a network.




// It is recommended to keep all declarations at the top of each script or function. The benefits of doing this are,
// - Gives cleaner code
// - It provides a single place to look for local variables
// - Easy to avoid unwanted global variables
// - It reduces the possibility of unwanted re-declarations



// It is recommended to initialize variables because of the below benefits,

// - It gives cleaner code
// - It provides a single place to initialize variables
// - Avoid undefined values in the code


// Random number
console.log("Random number: ", Math.floor(Math.random() * 100) + 1);


// Random integer number between given pair of integers
function printRandomInteger(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(1))
}

console.log("Random number between 11 and 15: ", printRandomInteger(11, 15));





// Tree shaking
// Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.
// Tree Shaking can significantly reduce the code size in any application. i.e, The less code we send over the wire the more performant the application will be. For example, if we just want to create a “Hello World” Application using SPA frameworks then it will take around a few MBs, but by tree shaking it can bring down the size to just a few hundred KBs. Tree shaking is implemented in Rollup and Webpack bundlers.




// What would be the result of 1+2+'3'
// The output is going to be 33. Since 1 and 2 are numeric values, the result of the first two digits is going to be a numeric value 3. The next digit is a string type value because of that the addition of numeric value 3 and string type value 3 is just going to be a concatenation value 33.






// How do you detect a mobile browser without regexp
// You can detect mobile browsers by simply running through a list of devices and checking if the useragent matches anything. This is an alternative solution for RegExp usage,

function detectmob() {
    if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
}



// Calculating device width and height
var deviceWidth = window.innerWidth
var deviceHeight = window.innerHeight

console.log("Device width: ", deviceWidth);
console.log("Device height: ", deviceHeight);




// you can apply chaining on conditional operators similar to if … else if … else if … else chain. The syntax is going to be as below,

function traceValue(someParam) {
    return condition1
        ? value1
        : condition2
            ? value2
            : condition3
                ? value3
                : value4;
}

// The above conditional operator is equivalent to:

function traceValue(someParam) {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}




// What is the difference between proto and prototype

// The __proto__ object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas prototype is the object that is used to build __proto__ when you create an object with new.






// What is a freeze method

// The freeze() method is used to freeze an object. Freezing an object does not allow adding new properties to an object,prevents from removing and prevents changing the enumerability, configurability, or writability of existing properties. i.e, It returns the passed object and does not create a frozen copy. Remember freezing is only applied to the top-level properties in objects but not for nested objects.

// Below are the main benefits of using freeze method,
// It is used for freezing objects and arrays.
// It is used to make an object immutable.

const obj = {
    prop: 100,
};

Object.freeze(obj);
obj.prop = 200; // Throws an error in strict mode

console.log("Freezing object: ", obj.prop); //100

// To check if an object is frozen or not
console.log("Is object frozen: ", Object.isFrozen(obj));

// Why do I need to use freeze method
// In the Object-oriented paradigm, an existing API contains certain elements that are not intended to be extended, modified, or re-used outside of their current context. Hence it works as the final keyword which is used in various languages.





// What is the purpose of seal method

// The Object.seal() method is used to seal an object, by preventing new properties from being added to it and marking all existing properties as non-configurable. But values of present properties can still be changed as long as they are writable. Let's see the below example to understand more about seal() method

const object = {
    property: "Welcome JS world",
};
Object.seal(object);
object.property = "Welcome to object world";
console.log(Object.isSealed(object)); // true
delete object.property; // You cannot delete when sealed
console.log(object.property); //Welcome to object world

// To check if an object is sealed or not 
console.log("Is object sealed: ", Object.isSealed(object));




// Browsers language
const language = window.navigator.language
console.log("Browsers language: ", language);





// You can use the <noscript> tag to detect javascript disabled or not. The code block inside <noscript> gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.






// How do you determine two values same or not using object

// The Object.is() method determines whether two values are the same value. For example, the usage with different types of values would be,
console.log(Object.is("hello", "hello"));
console.log(Object.is(window, window))
console.log(Object.is([], []))

// Two values are the same if one of the following holds:
// - both undefined
// - both null
// - both true or both false
// - both strings of the same length with the same characters in the same order
// - both the same object (means both object have same reference)
// - both numbers and both +0 both -0 both NaN both non-zero and both not NaN and both have the same value.






// How do you copy properties from one object to other

// You can use the Object.assign() method which is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects. The syntax would be as below,
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const returnedTarget = Object.assign(target, source);

console.log("Target: ", target); // { a: 1, b: 3, c: 4 }

console.log("Returned Target: ", returnedTarget); // { a: 1, b: 3, c: 4 }

// Below are the some of main applications of Object.assign() method,
// - It is used for cloning an object.
// - It is used to merge objects with the same properties.





// How do you get enumerable key and value pairs

// The Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. Let's see the functionality of object.entries() method in an example,

const objectOne = {
    a: "Good morning",
    b: 100,
};

for (let [key, value] of Object.entries(objectOne)) {
    console.log(`${key}: ${value}`); // a: 'Good morning'
    // b: 100
}







// What is a proxy object

// The Proxy object is used to define custom behavior for fundamental operations such as property lookup, assignment, enumeration, function invocation, etc.

// A proxy is created with two parameters: a target object which you want to proxy and a handler object which contains methods to intercept fundamental operations. The syntax would be as follows,

// --- var p = new Proxy(target, handler); ---

//Example1:

const person = {
    name: 'Sudheer Jonna',
    age: 35
};

const handler = {
    get(target, prop) {
        if (prop === 'name') {
            return 'Mr. ' + target[prop];
        }
        return target[prop];
    }
};

const proxy = new Proxy(person, handler);
console.log("Proxy: ", proxy);
console.log("Persons age: ", proxy.age);
console.log("getting name using proxy handler: ", handler.get(proxy, "name"));






// How to create an object using prototype
const anonObject = Object.create({});
anonObject.description = "Created using Object.create"

anonObject.print = function () {
    return "Im printing from inside of the objects function created using prototype"
}

console.log("Anonymous object: ", anonObject.print());

Object.defineProperty(anonObject, "getDescription", {
    value: function () {
        return this.description
    }
})

console.log("Anonymous object description: ", anonObject.getDescription());

const newObject = {
    name: "Mohit"
}

// Instead of doing this
// newObject.__proto__.getName = function () {
//     return this.name
// }

// Do this
Object.setPrototypeOf(newObject, {
    getName: function () {
        return this.name

    }
})

console.log("Name: ", newObject.getName());






// Note the difference semicolon can make in the below code
function semicolonFunction(){
    return ;
    {
        message: "In some places, semicolons do make difference"
    }
}

console.log("Semicolon function: ", semicolonFunction());









console.log(globalVariable);




















const Animal = function(name, age){
    this.name = name
    this.age = age
}

Animal.prototype.isSleeping = () => {
    console.log("Animal is sleeping");
}

// const animal = new Animal("Cow", 12)
// animal.isSleeping()

const Dog = function(name, age, breed){
    // Just like calling super inside of a class we can do the below
    Animal.call(this, name, age)
    this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

const dog = new Dog("Jacky", 5, "Mixed bully")
console.log(dog);




