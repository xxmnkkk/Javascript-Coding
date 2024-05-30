// Whenever we return a promise, it also returns a promise.

const promise = fetch(
  "https://64ca8a15700d50e3c70507e4.mockapi.io/api/v1/book"
);

promise
  .then((response) => {
    console.dir(response);
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });


// lets understand it with the example below

const didRahulSleepEarly = false;

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("wake rahul up");
  }, 5000);
});

promise1.then(value => console.log(value))

promise1.then((res) => {
  if (didRahulSleepEarly) {
    return "ok";
  }
  const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      res("wake up now at least")
    }, 5000)
  })


  promise2.then(value => console.log(value));
}).then(() => {
  console.log("")
})