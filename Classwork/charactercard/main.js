const characterInformationSection = document.querySelector("#character-information");
const attackButton = document.querySelector("#attacked");
const levelUpButton = document.querySelector("#level-up");

characterInformationObject = {
    name: "Snortleblat"
    ,class: "Swamp Beast Diplomat"
    ,level: 1
    ,health: 100
    ,imageSrc: `images/snortleblat.webp" alt="snortleblat-img`
    ,attack: function attackFunction(){
        characterInformationObject.health = characterInformationObject.health - 20;
        displayCharacterInformation();
        if (characterInformationObject.health <= 0){
            setTimeout( ()=>{alert("Character Died"), characterInformationObject.health = 100
                ,characterInformationObject.level = 1, displayCharacterInformation()}, 0);
        };


    }
    ,levelUp: function levelUpFunction(){
        characterInformationObject.level = characterInformationObject.level +1;
        displayCharacterInformation()
    }
};

function displayCharacterInformation() {
    characterInformationSection.innerHTML = 
        `
            <img src="${characterInformationObject.imageSrc}">
            <h1>${characterInformationObject.name}</h1>
            <p>Class: ${characterInformationObject.class}</p>
            <p>Level: ${characterInformationObject.level}</p>
            <p>Health: ${characterInformationObject.health}</p>
        `
};

displayCharacterInformation();

attackButton.addEventListener("click", characterInformationObject.attack);
levelUpButton.addEventListener("click", characterInformationObject.levelUp)