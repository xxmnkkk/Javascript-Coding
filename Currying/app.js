// It is a technique in functional programming, that transforms the function of multiple arguments into several functions of a single argument in sequence.

// Normal function
function multiply(a, b) {
    return a * b
};

console.log(multiply(3, 3));

// Curried function
function multiply2(a){
    return function(b){
        return a * b
    }
};

console.log(multiply2(3)(3));


// Advantage
function loggerUtil(fileName) {
  return function (type) {
    return function (errorMessage) {
      if (type === "normal") {
        console.log(`${fileName} has error ${errorMessage}`);
      } else {
        console.error(`${fileName} has error ${errorMessage}`);
      }
    };
  };
}

// while calling a normal function there would be repetition of arguments passed to the function, but this can be avoided using the curried method

// currying function
const indexFileLogger = loggerUtil("index.js");

// defining error type and storing the fi=unction in variable
const normalError = indexFileLogger("normal");
const criticalLogger = indexFileLogger("critical");

// normal function
// loggerUtil("index.js","normal","this is a error")
// loggerUtil("index.js","normal","this is another error")

normalError("this is a error");
normalError("this is another error");

criticalLogger("something big broke");
criticalLogger("something else broke");