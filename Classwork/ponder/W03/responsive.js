let menu_button = document.querySelector(".menu-btn");

menu_button.addEventListener("click", (event)=> {
    // menu_button.classList.toggle('change');

    let navigation_menu = document.querySelector("nav");
    if(navigation_menu.style.display === '') {
        navigation_menu.style.display = 'flex';
    } else {
        navigation_menu.style.display = '';
    }
    //ternary operator. This does the same thing as if/else
    // navigation_menu.style.display = navigation_menu.style.display === '' ? 'flex' : '';

    menu_button.classList.toggle('change');
});

// ("click", function (event))
// This is good if you only want the function once. Do one thing. Do another thing. (event)=> is just shorthand.


