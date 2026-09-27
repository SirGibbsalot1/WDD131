
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.querySelector("body").style.backgroundColor = "#252525";
        document.querySelector("#container").style.borderColor = "white";
        document.querySelector("#mission-statement").style.color = "white";
        document.querySelector("#main-body").style.color = "white";
        document.querySelector("#byui-logo").src="images/byui-logo-white.png";
        document.querySelector("h2").style.borderColor = "white";
    } else {
        // code for changes to colors and logo
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("#container").style.borderColor = "black";
        document.querySelector("#mission-statement").style.color = "black";
        document.querySelector("#main-body").style.color = "black";
        document.querySelector("#byui-logo").src="images/byui-logo.png";
        document.querySelector("h2").style.borderColor = "#0000000f";
    }
}           
                    