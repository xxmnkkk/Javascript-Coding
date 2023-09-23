let userName;

if(!localStorage.getItem("username")){
    userName = prompt("Please enter your username");
    localStorage.setItem("username", userName);
    console.log(`Welcome to the platform ${userName}`);
}else{
    userName = localStorage.getItem("username");
    console.log(`Welcome ${userName}`)
}
