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
let buyTab = document.getElementById("buy");
let levelUpTab = document.getElementById("levelUp");
let sellTab = document.getElementById("sell");

let addOneToVitality = document.getElementById("addOneToVitality");
let addOneToProjection = document.getElementById("addOneToProjection");
let addOneToFortitude = document.getElementById("addOneToFortitude");
let addOneToAgility = document.getElementById("addOneToAgility");
let addOneToIntelligence = document.getElementById("addOneToIntelligence");
let addOneToWillpower = document.getElementById("addOneToWillpower");
let addOneToIntmidation = document.getElementById("addOneToIntmidation");


// LISTENERS //
addOneToVitality.onclick = function(){
    display.addOneToVitality();
}
addOneToProjection.onclick = function(){
    display.addOneToProjection();
}
addOneToFortitude.onclick = function(){
    display.addOneToFortitude();
}
addOneToAgility.onclick = function(){
    display.addOneToAgility();
}
addOneToIntelligence.onclick = function(){
    display.addOneToIntelligence();
}
addOneToWillpower.onclick = function(){
    display.addOneToWillpower();
}
addOneToIntmidation.onclick = function(){
    display.addOneToIntmidation();
}




sellTab.onclick = function(){
    display.sellTab();
}

buyTab.onclick = function(){
    display.buyTab();
}

levelUpTab.onclick = function(){
    display.levelUpTab();
}

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