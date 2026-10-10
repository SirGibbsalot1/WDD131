// 1. vars for imgs
let gallerySection = document.querySelector("#img-container");
let modal = document.querySelector('dialog')
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
let menu_button = document.querySelector("#menu-button")
let menu_nav = document.querySelector("#menu-nav")

// 2. listen for click
gallerySection.addEventListener('click', (event) => {
    // 3. change src img on dialog to big pic
    if(event.target.src !== undefined){
        // set the src img of modal 
        modalImg.src = event.target.src.replace("_sm", "_full");
        // display modal
        modal.showModal();
    }
});

// 4. close

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

menu_button.addEventListener("click", () => {
  menu_nav.classList.toggle("open");
});