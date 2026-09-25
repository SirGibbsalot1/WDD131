let age = 26; 
// This is how to declae a variable in JavaScript
// A semi colon isn't strictly necessary, but it confirms a line break

// var;
// This is the legacy way of declaring a variable. 
// There is a slight difference, but I'd have to study it myself

console.log(age);
// This is the equivalent of print command in Python

age = 34
console.log(age)
favoriteColor = ""

const eyeColor = "Blue";
// this variable cannot be reassigned (change)

// scope is where variables can be referenced
if(age == 34) {
    // we are now in a different scope
    // inside this scope, we can reference variables declared outside this scope

    // Variables from this scope cannot be referenced in an outer scope, i.e. if
    // we declare a variable in the if statement, it can't be referenced globally

    // let favoriteColor = "BLUE"

    // This var will be removed from memory after use
    // If you need to access this, then you can declare it as an empty var globally,
    // and reference it here instead of declare it

    favoriteColor = "BLUE"
}

console.log(favoriteColor)
// this causes and error because favoriteColor is only in the if statement's scope

document.querySelector("h1").style.color = favoriteColor