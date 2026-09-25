// In JavaScript, a function can be called before it is defined
nameOfFunction();

// 1. Functions
function nameOfFunction(name){
    console.log("Hello functions!" + name);
    console.log(`your name is ${name}`); 
    // ` this is a back tick (above the tab same key as ~) NOT a single quote '
}

nameOfFunction("Gabe Edstrom");


// 2. Event Listeners
    // Grab an element from the DOM to "listen" to.
let selectBox = document.querySelector("#theme-select");
    // Register an event listener on that element
    // waiting for a specific thing to happen, then run a function
selectBox.addEventListener("change", changeTheme);
        // Event listener function takes two arguments. In this case, change and the function called

        // Note that the function here doesn't have the () following it. In JS, it would try to run 
        // that function rather than reference it.

function changeTheme(event){
    console.log(event.target.value);
}



// 3. If Statements


// copied code from ponder:

let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
// === checks if they are equal AND checks that they are same datatype. It's called strict equals
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          