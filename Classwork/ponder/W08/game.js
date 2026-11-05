// 1. click on button
document.querySelector("#rollButton").addEventListener("click", e => {
    // 2. Animate the die
    document.querySelectorAll("#gameboard img").forEach(image =>{
        //change image source to the animated gif
        image.src = "assets/die_rolling.gif";
    });
    // 3. land on a new random number
    setTimeout(() =>{
        //this funtion will run after the timeout duration below
        document.querySelectorAll("#gameboard img").forEach(image =>{
        const randomNumber = Math.ceil(Math.random()*6);
        image.src = `assets/yellow_dice_${randomNumber}.gif`;
        //this number is miliseconds to wait
        });
    }, 1000)
});

function setDieImages(imagePath) {
    document.querySelectorAll("#gameboard img").forEach(image =>{
    image.src = imagePath;
    });
}

// function yahtzee() {
//     let dice = document.querySelectorAll("#gameboard img")
//     dice.src.forEach(die =>{
//         let index = 0;
//         if (die[index] == die[index+1]){
//             index += 1
//             if (index == 5){
//                 document.querySelector("#yahtsee-message").textContent = `YAHTZEE!!`;
//                 console.log("YAHTZEE!")
//         }
//         };


//     });
// };