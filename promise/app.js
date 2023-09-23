// API

/* PROMISE */

// Promise is an object
// const promise = new Promise();
// Promise accepts two parameter - resolve and reject

// Create a promise
// We never usually create a promise, we generally consume a promise
// Even if we dont give setTimeout, promise will run after GEC is executed because promise is waiting in the micro task queue.
// In case of resolve, then will wait in the micro task queue
// In case of reject, catch will wait in the micro task queue
const promiseCallBack = (resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);

    // resolve("Success without Timeout function");

    setTimeout(() => {
        reject("This is inside reject");    
    }, 2000);

    // reject("This is inside reject, without Timeout function");    
};

const promise = new Promise(promiseCallBack);

console.log("This is before promise");

// Every Promise object has a function called then, which takes a callback function, it will execute when resolve is called.
// Every Promise object has a function called catch, which takes a callback function, it will execute when reject is called.

promise.then((value) => {
    console.log("This is inside Promise, ", value);
}).catch((error) => {
    console.log("This is inside Catch, ", error);
});

console.log("This is after Promise");


// We cannot call resolve and reject at the same time, think of it as an on/off switch.





/* PROMISE ALL */

const isFromTierOne = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("got 8.9 cgpa");
    }, 4000);
});

const hasHouse = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("5000sqft house");
    }, 3000);
});

const hasCar = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("honda civic");
    //   }, 2000);
    setTimeout(() => {
    reject("no car, you are poor");
    }, 2000);
});

const willHeGetMarried = Promise.all([isFromTierOne, hasHouse, hasCar]);

willHeGetMarried.then((result) => {
    console.log("Yes marriage", result);
}).catch((error) => {
    console.log("No marriage", error);
});