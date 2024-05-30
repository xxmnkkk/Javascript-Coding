// Async Await 

// async function returns promise
// await performs the same function of 'then' used in promise
async function getBook() {
    const response = await fetch("https://my-portfolio-backend-d1u9.onrender.com/api/project/getProjectDetails");
    const result = await response.json();
    console.log("API response: ", result);

    // return result;
}

getBook();

const test = getBook();
console.log("Calling test: ", test);



// Example of applying it on promise
// To handle catch, we can use try catch block
const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(24);
    }, 1000);

    setTimeout(() => {
        reject("This is an error");
    },1000);
});

async function handlePromise() {
    try{
        const value = await promise;
        console.log(value);
    }
    catch(error) {
        console.log(error);
    }
}

handlePromise();