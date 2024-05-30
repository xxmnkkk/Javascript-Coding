// While doing DOM, it is important to use defer in the script tag. 

// DOM stands for Document Object Model, it is a programming interface. It's basically an API.
// With DOM, javascript can access and change all the elements of an HTML document.
// When a web page is loaded, the browser creates a Document Object Model of the page. The HTML DOM model is constructed as a tree of Objects.

// Dom consists of 1) A set of API's and 2) Internal representation of the HTML.
// DOM returns HTML collection or Node list

// API's to select for 1

// Outdated -
// document.getElementsByTagName("");
// document.getElementsByName("");
// document.getElementById("");
// document.getElementsByClassName("");

// Better alternatives to the above methods for selecting -
// document.querySelector("");
// document.querySelectorAll("");


// API's to select for 1+



// Will return HTMLCollection
const myName = document.getElementsByTagName("h1");
console.dir(myName);

// Will return HTMLCollection
const heading = document.getElementsByTagName("h2");
console.dir(heading);

// Will return 
const myName2 = document.querySelector("h1");
console.dir(myName2);

// Will return NodeList
const heading2 = document.querySelectorAll("h2");
console.dir(heading2)


const headingArray = Array.from(heading);
const heading2Array = Array.from(heading2);

console.dir(headingArray);
console.dir(heading2Array);








// const friends = ["Mohit", "Kumar"];

// const friendsContainer = document.createElement("div");
// const ol = document.createElement("ol");

// for (let friend of friends) {
//   const li = document.createElement("li");
//   li.innerText = friend;
//   ol.appendChild(li);
// }
// friendsContainer.appendChild(ol);

// const body = document.querySelector("body");
// body.appendChild(friendsContainer);
