// A regular expression (also called regex or regexp) is a way to describe a pattern. It is used to locate or validate specific strings or patterns of text in a sentence, document, or any other character input. Regular expressions use both basic and special characters.

// Regex is basically a way to complex search in a string
// When you do command + F , the window that appears is basically regex

// ^ ==> This is beginning symbol
// $ ==> This is end symbol
// [] ==> This is character set, whatever is written in it, can be used in the string whereever it is mentioned
// []{2} ==> what ever is written in [] can be used 2 times because of {2}
// Better alternative to the above method
// // []+ ==> what ever is written in [] can be matched with one or more occurances

/*
    Regex for writing gmail address
    /^[A-Za-z0-9+_.-]+@(.+)$/g

    . means match any single character except line break
    () capture group groups multiple tokens together
*/


// const reg = /^Mohit$/;

// const name = prompt("Please enter your name");

// if(reg.test(name)){
//     console.log("All hail Mohit");
// }else{
//     console.log("NOPE, Get Lost!!!")
// }

 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const emailAddress = prompt("Please ENTER your email");

if(emailRegex.test(emailAddress)){
    console.log("WELCOME!!!");
}else{
    console.log("Please enter the correct email");
}