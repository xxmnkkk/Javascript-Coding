const friends = [
  { name: "Alen Sam Saji", age: 24 },
  { name: "Mohammed Abrar", age: 26 },
  { name: "Navaneet Krishnan", age: 25 },
];

// ["rahul mohan","rohan singh poona","suraj"];

const test = friends.map((friend) => {
  return friend.name;
});

console.log(test);

// filter function will return boolean
// map will return the element itself
const allowedMemberNames = friends
  .filter((friend) => {
    if (friend.age > 25) {
      return true;
    } else {
      return false;
    }
  })
  .map((allowedMember) => {
    return allowedMember.name;
  });

console.log(allowedMemberNames);


// Polyfill is a technique used to add functionality of older web browsers.
// It is basically a piece of code to add/modify the new functions. It is used to provide modern functionality to web browsers.

// Polyfill for map
Array.prototype.myMap = function (mappingFunction) {
  const newMappedArray = [];
  for (let element of this) {
    newMappedArray.push(mappingFunction(element));
  }
  return newMappedArray;
};

const names = friends.myMap((friend) => {
  return friend.name;
});

console.log(names);

// Polyfill for filter
Array.prototype.myFilter = function (fun) {
  const newArray = [];
  for (let element of this) {
    if (fun(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

const filteredList = friends.myFilter((el) => {
  if (el.age > 25) {
    return true;
  }
});

console.log(filteredList);

// Polyfill is not recommended because of monkey patching. The functionalities that already exist, does not need over riding default existing libraries. This is never done in the industry but can be asked in interview.