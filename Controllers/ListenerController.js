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

$("#buttonDisplay").on("click", "button", function(){
    display.allocateLevelUpPoint($(this).val());
})

let itemToBuy;
$("#buyableOption").on("click", "li", function () {
    display.showItemDescription($(this).text());
    itemToBuy = $(this).text()
})

$("#itemDescription").on("click", "button", function () {
    display.requestToBuyItem(itemToBuy);
})

let itemToSell;
$("#bagInShop").on("click", "li", function () {
    display.showBagsItemDescription($(this).text());
    itemToBuy = $(this).text()
})

let possesedItem
$("#possesedItems").on("click", "li", function(){
    display.showItemDescriptionInHome($(this).text());
     possesedItem = $(this).text()
})

$("#itemDescriptionInHome").on("click", "button", function () {
    if(possesedItem != 0){display.equip(possesedItem)}
    possesedItem = 0;
})

let equippedItem
$("#equippedItemsInHome").on("click", "li", function(){
    display.showEquippedItemDescription($(this).text());
    equippedItem = $(this).text()
})

$("#equippedItemDescriptionInHome").on("click", "button", function () {
    display.unequip(equippedItem)
})



// LISTENERS //

closeItemDescription.onclick = function () {
    display.closeDescription();
}

closeItemDescriptionInHome.onclick = function () {
    display.closeDescriptionInHome();
}

closeEquippedItemDescriptionInHome.onclick = function () {
    display.closeEquippedItemDescriptionInHome();
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