function Person() {
    // if we try to get the current time using the below code, then it will show it correnctly today, but tomorrow it will be the same as today.
    this.time = new Date();

    // To solve this issue we can use the below line of code where Object is the parent of all objects and defineProperty is a static function.
    Object.defineProperty(this, "currentTime", {
        get: function() {
            return new Date();
        }
    });

    return this;
}

const time = new Person();
console.log(time);
console.dir(time.currentTime);

// this will print the same time after every 1000ms
setInterval(() => {
    console.log(time.time);
}, 1000);

// this will print the current time after every 1000ms
setInterval(() => {
    console.log(time.currentTime);
}, 1000);