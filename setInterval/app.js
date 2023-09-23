let time = 0;

const timer = setInterval(() => {
    console.log(time);
    time++
}, 1000);

setTimeout(() => {
    clearInterval(timer);
}, 10000);