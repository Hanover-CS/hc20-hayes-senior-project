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

let closeItemDescription = document.getElementById("closeItemDescription");

$("#buyableOption").on("click", "li", function () {
    display.requestToBuyItem($(this).text());
})

$("#bagInShop").on("click", "li", function () {
    display.showItemDescription($(this).text());
})

$("#possesedItems").on("click", "li", function(){
    display.showItemDescriptionInHome($(this).text());
})

$("#buttonDisplay").on("click", "button", function () {
    display.allocateLevelUpPoint($(this).val());
})


// LISTENERS //

closeItemDescription.onclick = function () {
    display.closeDescription();
}

closeItemDescriptionInHome.onclick = function () {
    display.closeDescriptionInHome();
}

sellTab.onclick = function () {
    display.sellTab();
}

buyTab.onclick = function () {
    display.buyTab();
}

levelUpTab.onclick = function () {
    display.levelUpTab();
}

createANewCharacterButton.onclick = function () {
    display.goToHomePageFromCharacterCreationMenu();
}

goToCreateCharacterPageFromHomePage.onclick = function () {
    display.goToCreateCharacterPageFromHomePage();
}

goToShopFromHomePage.onclick = function () {
    display.goToShopFromHomePage();
}

goToHomePageFromShop.onclick = function () {
    display.goToHomePageFromShop();
}

ascend.onclick = function () {
    display.goToBattleScreenFromHomePage();
}

decendButton.onclick = function () {
    display.goToHomePageFromBattleScreen();
}

ascendButton.onclick = function () {
    display.ascendButton();
}

attackButton.onclick = function () {
    display.attackButton();
}

levelUpButton.onclick = function () {
    display.levelUpButton();
}