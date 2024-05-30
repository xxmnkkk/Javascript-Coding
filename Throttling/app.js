// Throttling or sometimes also called throttle function is a practice used in websites. Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.

function throttle(callBack, delay){
    let wait = false;

    return (...args) => {
        if(wait){
            return;
        }
        callBack.apply(this,args);
        wait = true;

        setTimeout(() => {
            wait = false;
        }, delay);
    };
}

let throttledFunction = throttle(() => {
    console.log("I will print every 3 seconds")
}, 3000);

setInterval(() => {
    throttledFunction();
}, 1000);