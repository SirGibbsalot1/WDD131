// select and HTML element from the DOM
let heading = document.querySelector("h1");
// querySelector is a function that takes an argument

console.log(heading);

heading.style.color = "blue";

// saving this in a variable lets you use it more than once
// If you only need it once, you can skip assigning it to a var
let list = document.querySelector("ul");

list.style.fontSize = "30px"

// do everything one line
document.querySelector("#topics").style.color = "blue";

// there are different ways to select from the DOM (this does the same things as above)
document.getElementById("topics")

// you can select more than one element at a time
// returns a list of elements
console.log(document.querySelector(".list"));

// apply a class to an element
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
