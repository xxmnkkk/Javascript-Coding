// SET TIMEOUT FUNCTION
// The setTimeout() method executes a block of code after the specified time. The method executes the code only once.

// Even though javascript is single threaded, but v8 engine that runs javascript is not.

setTimeout(() => {
    console.log("I am printed first");
}, 2000);

console.log("I am printed second");


const clearTime = setTimeout(() => {
    console.log("I wont print");
}, 1000);

clearTimeout(clearTime);