globalVariable = "I'm global variable"





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





console.log(globalVariable);