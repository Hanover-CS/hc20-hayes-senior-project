import Display from "./MasterController.js"

let display = new Display();

//Buttons
let createANewCharacterButton = document.getElementById("submitButton");
let goToCreateCharacterPageFromHomePage = document.getElementById("createCharacter");
let goToShopFromHomePage = document.getElementById("shop");
let goToHomePageFromShop = document.getElementById("homeP");
let ascend = document.getElementById("goToNextRoundOfCombat"); // Horible Name
let decendButton = document.getElementById("decendButton");// Horible Name
let ascendButton = document.getElementById("ascendFromBattleScreen"); // Horible Name
let attackButton = document.getElementById("attackButton");
let levelUpButton = document.getElementById("levelUpButton");


// LISTENERS //
createANewCharacterButton.onclick = function(){
    display.goToHomePageFromCharacterCreationMenu();
}

goToCreateCharacterPageFromHomePage.onclick = function(){
    display.goToCreateCharacterPageFromHomePage();
}

goToShopFromHomePage.onclick = function(){
    display.goToShopFromHomePage();
}

goToHomePageFromShop.onclick = function(){
    display.goToHomePageFromShop();
}

ascend.onclick = function(){
    display.goToBattleScreenFromHomePage();
}

decendButton.onclick = function(){
    display.goToHomePageFromBattleScreen();
}

ascendButton.onclick = function(){
    display.ascendButton();
}

attackButton.onclick = function(){
    display.attackButton();
}

levelUpButton.onclick = function(){
    display.levelUpButton();
}

