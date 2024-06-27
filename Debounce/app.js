// Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

// Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page that requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single-threaded language. 

// In the gmail compose tab, when we write a message, a text with new message is being displayed on the top left corner, when we stop typing for few seconds, the new message changes to draft saved. This is what debounce is supposed to do


// don't run the fun until the fun is not called for delay
function debounce(fun, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fun.apply(this, args);
      timeoutId = null;
    }, delay);
  };
}

const callServer = (firstName) => {
  console.log(`send data to server ${firstName}`);
};

const debounceSendToServer = debounce(callServer, 2000);

setInterval(() => {
  debounceSendToServer("Mohit");
}, 3000);




// We will use the debounce function for the live example


const input = document.querySelector("#inputbox");
const div = document.querySelector("div");

const debouncedWriteToDiv = debounce(() => {
  console.log("did this even fire");
  div.innerText = input.value;
}, 3000);

input.addEventListener("keydown", () => {
  debouncedWriteToDiv();
});