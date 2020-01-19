import TowerController from "./TowerController.js"
import Mechanics from "./CombatController.js"
import ShopController from "./ShopController.js"
import ItemController from "./ItemController.JS"


let tower = new TowerController;
let mechanics = new Mechanics;
let shop = new ShopController;
let itemController = new ItemController;

export default class Display{
    constructor(){}


    goToCreateCharacterPageFromHomePage(){
        let pageToBeHidden = document.getElementById("homePage");
        let pageToBeShown = document.getElementById("characterCreatePage");
        displayNewPage(pageToBeHidden, pageToBeShown);
    }
    
    goToShopFromHomePage(){
        let pageToBeHidden = document.getElementById("homePage");
        let pageToBeShown = document.getElementById("shopPage");
        displayExperience();
        displayBag();
        displayNewPage(pageToBeHidden, pageToBeShown);
    }
    
    goToHomePageFromShop(){
        let pageToBeHidden = document.getElementById("shopPage");
        let pageToBeShown = document.getElementById("homePage");
        this.closeDescription();
        this.levelUpTab();
        showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
        displayBagInHome();
        displayNewPage(pageToBeHidden, pageToBeShown);
    }
    
    goToHomePageFromCharacterCreationMenu() {
        let pageToBeHidden = document.getElementById("characterCreatePage");
        let pageToBeShown = document.getElementById("homePage");
        displayNewPage(pageToBeHidden, pageToBeShown);
        createTheRequestedCharacter();
        showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
        showTheHomeScreenAscendButton();
    }

    goToBattleScreenFromHomePage(){
        let pageToBeHidden = document.getElementById("homePage");
        let pageToBeShown = document.getElementById("battleScreen");
        
        mechanics.deleteEnemy();
        displayTower();
        let info = tower.getTowerInfo();
        mechanics.createEnemy(info.floor, info.wave); /////////////////This needs to be refactored
        mechanics.getTurnOrder();
        if(mechanics.isAIsTurn()){AIAttacks();}
        showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
        showTheAttackButton();
        hideTheAscendButtonInTheBattleScreen();
        displayNewPage(pageToBeHidden, pageToBeShown);
    }

    ascendButton(){
        clearTextArea();
        if(tower.isAtTop()){
            displayEndOfGameMessage();
        } else {
            tower.nextFloor();
        }
        displayTower();
        let info = tower.getTowerInfo();
        console.log(info)
        mechanics.createEnemy(info.floor, info.wave);
        mechanics.getTurnOrder();
        if(mechanics.isAIsTurn()){AIAttacks();}
        showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
        showTheAttackButton();
        hideTheAscendButtonInTheBattleScreen();
    }

    levelUpButton(){
        if(mechanics.isCharacterAbleToLevelUp()){
            hideLevelUpButton();
            mechanics.levelUpCharacter(); 
            displayExperience();
            showAttributeDisplay();
            showButtonDisplay();
            showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
        } else {
            giveErrorMessage("Insufficient Experiance Points");
        }
    }

    goToHomePageFromBattleScreen(){
        let pageToBeHidden = document.getElementById("battleScreen");
        let pageToBeShown = document.getElementById("homePage");
        cleanAndResetBattlePage();
        if(isPlayerDead()){
            mechanics.deletePlayerCharacter();
            displayNewCharacterRequiredMessage();
            hideTheAscendButtonInTheHomePage();
        }
        else{mechanics.playerCharacterReset();
            showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
        }
        displayNewPage(pageToBeHidden, pageToBeShown);
    }

    attackButton(){
        let enemiesHpBeforeCombat = mechanics.getEnemy().get_All_Attributes().vitality;
        mechanics.attackFunction();
        let enemiesHpAfterCombat = mechanics.getEnemy().get_All_Attributes().vitality;
        displayTheBattleReportForWhatHappenedToTheEnemyThisRound(enemiesHpBeforeCombat, enemiesHpAfterCombat);

        if(isEnemyDead(mechanics.getEnemy())){
            giveEnemyDefeatedMessage(mechanics.getEnemy());
            mechanics.deleteEnemy();
            showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
            showTheAscendButton();
            hideTheAttackButton();
            shop.addDrougets(40000);
        } else {AIAttacks();} 
    
        if(isPlayerDead()){
            givePlayerDefeatedMessage(mechanics.getCharacter());
            showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
            hideTheAttackButton();
        }
    }

    buyTab(){
        let tabToBeHidden = document.getElementById("buy");
        let firstTabToBeShown = document.getElementById("levelUp");
        let secondTabToBeShown = document.getElementById("sell");
        switchTab(tabToBeHidden, firstTabToBeShown, secondTabToBeShown);
        let buyMenu = document.getElementById("buyMenu");
        let sellMenu = document.getElementById("sellMenu");
        let levelUpMenu = document.getElementById("levelUpMenu");
        buyMenu.style.display = "block";
        sellMenu.style.display = "none";
        levelUpMenu.style.display = "none";
        displayCurrency("currency1");
        populateBuyableOptions();

    }

    levelUpTab(){
        let tabToBeHidden = document.getElementById("levelUp");
        let firstTabToBeShown = document.getElementById("buy");
        let secondTabToBeShown = document.getElementById("sell");
        switchTab(tabToBeHidden, firstTabToBeShown, secondTabToBeShown);
        let buyMenu = document.getElementById("buyMenu");
        let sellMenu = document.getElementById("sellMenu");
        let levelUpMenu = document.getElementById("levelUpMenu");
        buyMenu.style.display = "none";
        sellMenu.style.display = "none";
        levelUpMenu.style.display = "block";
        this.closeDescription();
        displayExperience();
    }

    sellTab(){
        let tabToBeHidden = document.getElementById("sell");
        let firstTabToBeShown = document.getElementById("levelUp");
        let secondTabToBeShown = document.getElementById("buy");
        switchTab(tabToBeHidden, firstTabToBeShown, secondTabToBeShown);
        let buyMenu = document.getElementById("buyMenu");
        let sellMenu = document.getElementById("sellMenu");
        let levelUpMenu = document.getElementById("levelUpMenu");
        buyMenu.style.display = "none";
        sellMenu.style.display = "block";
        levelUpMenu.style.display = "none";
        displayCurrency("currency2");
    }

    allocateLevelUpPoint(string){
        mechanics.apply_Level_Up_Points(string);
        displayCharactersStats(getPlayerCharacterInformation(mechanics.getCharacter()));
        ifOutOfPoints_HideWindow();
    }

    requestToBuyItem(string){
        let item = itemController.getItem(string);
        if (shop.canBuy(item)){
            shop.buyItem(item);
            displayCurrency("currency1");
            itemController.addItemToBag(item);
            displayBag();
            this.closeDescription();
        } else {
            alert("This item is too expensive");
        }
    }

    requestToSellItem(string){
        let item = itemController.getItem(string);
        shop.sellItem(item);
        displayCurrency("currency1");
        itemController.removeItemFromBag(item);
        displayBag();
        this.closeDescription();
    }
    

    // sellItem

    showItemDescription(string){
        displayItemDescription(string);
    }

    showBagsItemDescription(string){
        displayBagsItemDescription(string);
    }

    showItemDescriptionInHome(string){
        displayItemDescriptionInHome(string);
        document.getElementById("equippedItemsInHome").style.display = "none"
    }

    closeDescription(){
        document.getElementById("itemDescription").style.display = "none"
        document.getElementById("closeItemDescription").style.display = "none"
    }

    closeDescriptionInHome(){
        document.getElementById("itemDescriptionInHome").style.display = "none"
        document.getElementById("closeItemDescriptionInHome").style.display = "none"
        document.getElementById("equippedItemsInHome").style.display = "block"
    }

    closeEquippedItemDescriptionInHome(){
        document.getElementById("equippedItemDescriptionInHome").style.display = "none"
        document.getElementById("closeEquippedItemDescriptionInHome").style.display = "none"
        document.getElementById("equippedItemsInHome").style.display = "block"
    }

    equip(string){
        let item = itemController.getItem(string);
        if (mechanics.isEquippable(item)){
            mechanics.equip(item);
            itemController.removeItemFromBag(item);
            showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
            document.getElementById("equip").style.display = "none";
            displayBagInHome();
            hideItemDescriptionInHome();
            displayEquippedGear();
        } else {
            alert("Area already equipped");
        }

    }

    unequip(string){
        let item = itemController.getItem(string);
        mechanics.unequip(item);
        itemController.addItemToBag(item);
        showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));

        displayBagInHome();
        hideItemDescriptionInHome(); //////////////
        displayEquippedGear();
        displayEquippedGear();
    }

    showEquippedItemDescription(string){
        displayEquippedItemDescription(string)
    }
}

function populateBuyableOptions(){
    let list = itemController.getAllCurrentlyBuyableOptions();
    let source = document.getElementById("displayItemInBag").innerHTML;
    let template = Handlebars.compile(source);
    let html
    html = template();
    document.getElementById("buyableOption").innerHTML = html;
    for (let item in list){
        let html = template(list[item]);
        document.getElementById("buyableOption").innerHTML += html;
    }
}

function displayBag(){
    let list = itemController.getAllItemsInBag();
    let source = document.getElementById("displayItemInBag").innerHTML;
    let template = Handlebars.compile(source);
    let html
    html = template();
    document.getElementById("bagInShop").innerHTML = html;
    for (let item in list){
        let html = template(list[item]);
        document.getElementById("bagInShop").innerHTML += html;
    }
}

function displayEquippedGear(){
    document.getElementById("equippedItemsInHome").style.display = "block"
    let source = document.getElementById("displayItemInBag").innerHTML;
    let template = Handlebars.compile(source);
    let list = mechanics.getEquippedGear();
    console.log(list)
    let html
    html = template();
    document.getElementById("equippedItemsInHome").innerHTML = html;
    for(let item in list){
        html = template(list[item]);
        document.getElementById("equippedItemsInHome").innerHTML += html;
    }
}

function displayEquippedItemDescription(string){
    let listOfGear = mechanics.getEquippedGear();
    console.log("here")
    let source = document.getElementById("displayEquippedItemDescription").innerHTML;
    let template = Handlebars.compile(source);
    for (let itemInList in listOfGear){
        if (string == listOfGear[itemInList].getName()){
            let html = template(listOfGear[itemInList]);
            document.getElementById("equippedItemDescriptionInHome").innerHTML = html;
        }
    }
    document.getElementById("equippedItemsInHome").style.display = "none"
    document.getElementById("equippedItemDescriptionInHome").style.display = "block"
    document.getElementById("closeEquippedItemDescriptionInHome").style.display = "block"
}

function displayItemDescription(string){
    let item = itemController.getItem(string);
    let source = document.getElementById("displayItemDescription").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(item);
    document.getElementById("itemDescription").innerHTML = html;
    document.getElementById("itemDescription").style.display = "block"
    document.getElementById("closeItemDescription").style.display = "block"
}

function displayBagsItemDescription(string){
    let item = itemController.getItem(string);
    let source = document.getElementById("displayBagsItemDescription").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(item);
    document.getElementById("itemDescription").innerHTML = html;
    document.getElementById("itemDescription").style.display = "block"
    document.getElementById("closeItemDescription").style.display = "block"
}

function displayItemDescriptionInHome(string){
    let item = itemController.getItem(string);
    let source = document.getElementById("displayItemDescriptionInHome").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(item);
    document.getElementById("itemDescriptionInHome").innerHTML = html;
    document.getElementById("itemDescriptionInHome").style.display = "block"
    document.getElementById("closeItemDescriptionInHome").style.display = "block"
}

function hideItemDescriptionInHome(){
    document.getElementById("equippedItemDescriptionInHome").style.display = "none"
    document.getElementById("closeEquippedItemDescriptionInHome").style.display = "none"
}

// function hideEquippedItemDescriptionInHome(){
//     document.getElementById("equippedItemDescriptionInHome").style.display = "none"
//     document.getElementById("closeEquippedItemDescriptionInHome").style.display = "none"
// }

function hideLevelUpButton(){
    document.getElementById("levelUpButton").style.display = "none"
}

function showLevelUpButton(){
    document.getElementById("levelUpButton").style.display = "block"
}



function displayBagInHome(){
    let items = itemController.getAllItemsInBag();
    let source = document.getElementById("displayItemInBag").innerHTML;
    let template = Handlebars.compile(source);
    let html;
    html = template();
    document.getElementById("possesedItems").innerHTML = html;
    if(items.length > 0){
        for(let item in items){
            html = template(items[item]);
            document.getElementById("possesedItems").innerHTML += html;
        }
    }
}

function ifOutOfPoints_HideWindow() {
    if (mechanics.isNotAbleToSpendAnotherPoint()) {
        hideAttributeWindow();
        hideButtonDisplay();
        showLevelUpButton();
    }
}

function showButtonDisplay(){
    document.getElementById("buttonDisplay").style.display = "block";
}

function hideButtonDisplay(){
    document.getElementById("buttonDisplay").style.display = "none";
}

function showAttributeDisplay(){
    document.getElementById("attributeDisplay").style.display = "block";
    displayCharactersStats(getPlayerCharacterInformation(mechanics.getCharacter()));
}

function hideAttributeWindow(){
    document.getElementById("attributeDisplay").style.display = "none";
}

function giveErrorMessage(string){
    if (string == "Insufficient Experiance Points"){
        alert("Insufficient Experiance Points");
    }
}

// Display Functions

function displayNewCharacterRequiredMessage(){
    let source = document.getElementById("needNewCharacterMessage").innerHTML;
    let template = Handlebars.compile(source);
    let html = template();
    document.getElementById("displayCharacterDivForHome").innerHTML = html;
}

function displayTower(){
    let towerInfo = tower.getTowerInfo();
    let source = document.getElementById("displayTowerTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(towerInfo);
    document.getElementById("towerDisplay").innerHTML = html;
}

function displayNewPage(pageToBeHidden, pageToBeShown) {
    pageToBeHidden.style.display = "none";
    pageToBeShown.style.display = "block";
}

function switchTab(tabToBeHidden, firstTabToHide, secondTabToHide){
    tabToBeHidden.style.display = "none";
    firstTabToHide.style.display = "block";
    secondTabToHide.style.display = "block";
}

function displayTheBattleReportForWhatHappenedToTheCharacterThisRound(charactersHpBeforeCombat, charactersHpAfterCombat) { // NO
    let theDamage = charactersHpBeforeCombat - charactersHpAfterCombat; // NO
    let battleStatistics = { nameOfAttacker: mechanics.getEnemy().get_Name(), nameOfDefender: mechanics.getCharacter().get_Name(), damage: theDamage };
    putTheReportIntoTheTextBox(battleStatistics);
}

function displayTheBattleReportForWhatHappenedToTheEnemyThisRound(enemiesHpBeforeCombat, enemiesHpAfterCombat) { // NO
    let theDamage = enemiesHpBeforeCombat - enemiesHpAfterCombat; // NO
    let battleStatistics = { nameOfAttacker: mechanics.getCharacter().get_Name(), nameOfDefender: mechanics.getEnemy().get_Name(), damage: theDamage };
    putTheReportIntoTheTextBox(battleStatistics);
}

function displayEndOfGameMessage(){
    let pageToBeHidden = document.getElementById("battleScreen");
    let pageToBeShown = document.getElementById("homePage");
    cleanAndResetBattlePage();
    mechanics.playerCharacterReset();
    showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
    displayNewPage(pageToBeHidden, pageToBeShown);
    //NEED TO CREATE MESSAGE THAT TELLS THE PLAYER THEY WON//

}


// Give Defeated Messages

function giveEnemyDefeatedMessage(enemy) {
    let source = document.getElementById("enemyWasDefeated").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(enemy);
    document.getElementById("displayEnemyDivForBattleScreen").innerHTML = html;
}

function givePlayerDefeatedMessage(character) {
    let source = document.getElementById("playerWasDefeated").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(character);
    document.getElementById("displayCharacterDivForBattleScreen").innerHTML = html;
}


// Clean-Up Functions

function clearTextArea(){
    let source = document.getElementById("battleReportReset").innerHTML;
    let template = Handlebars.compile(source);
    let html = template();
    document.getElementById("textField").innerHTML = html;
}

function cleanAndResetBattlePage() {
    tower.restartTower();
    mechanics.deleteEnemy();
    clearTextArea();
}


// Hide Buttons

function hideTheAscendButtonInTheBattleScreen() {
    let ascendButton = document.getElementById("ascendFromBattleScreen");
    ascendButton.style.display = "none";
}

function hideTheAscendButtonInTheHomePage(){
    let ascendButton = document.getElementById("goToNextRoundOfCombat");
    ascendButton.style.display = "none";
}

function hideTheAttackButton() {
    attackButton.style.display = "none";
}


// Show Buttons

function showTheAttackButton() {
    attackButton.style.display = "block";
}

function showTheAscendButton() {
    let ascendButton = document.getElementById("ascendFromBattleScreen");
    ascendButton.style.display = "block";
}

function showTheHomeScreenAscendButton(){
    let ascendButton = document.getElementById("goToNextRoundOfCombat");
    ascendButton.style.display = "block";
}


// Display Characters

function showCharacter(character) {
    let source = document.getElementById("displayCharacterTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(character);
    document.getElementById("displayCharacterDivForHome").innerHTML = html;
    document.getElementById("displayCharacterDivForBattleScreen").innerHTML = html;
}

function showEnemy(enemy) {
    let source = document.getElementById("displayEnemyTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(enemy);
    document.getElementById("displayEnemyDivForBattleScreen").innerHTML = html;
}

// Mics.

function AIAttacks() {
    let charactersHpBeforeCombat = mechanics.getCharacter().get_All_Attributes().vitality;
    mechanics.AIsTurn();
    let charactersHpAfterCombat = mechanics.getCharacter().get_All_Attributes().vitality;
    displayTheBattleReportForWhatHappenedToTheCharacterThisRound(charactersHpBeforeCombat, charactersHpAfterCombat);
    showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
    showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
}

function createTheRequestedCharacter() {
    let requestedName = document.getElementById("name").value;
    let requestedCharacter = document.getElementById("characterList").value;
    mechanics.createCharacter(requestedName, requestedCharacter);
}

function getPlayerCharacterInformation(character) {
    let playerCharactersStats = {
        name: character.get_Name(),
        level: character.get_Level(),
        hp: character.get_All_Attributes().vitality,
        attack: character.get_All_Attributes().attack,
        agility: character.get_All_Attributes().agility,
        fortitude: character.get_All_Attributes().fortitude,
        intelligence: character.get_All_Attributes().intelligence,
        willpower: character.get_All_Attributes().willpower,
        intimidation: character.get_All_Attributes().intimidation,
        experiance: character.get_Experience(),
        levelUpPoints: character.get_Level_Up_Points()};
        console.log(playerCharactersStats.intimidation)
        return playerCharactersStats;
}

function isEnemyDead(enemy) {
    return enemy.get_All_Attributes().vitality <= 0;
}

function isPlayerDead() {
    return mechanics.getCharacter().get_All_Attributes().vitality <= 0; // NO
}

function putTheReportIntoTheTextBox(battleStatistics){
    let source = document.getElementById("battleReportTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(battleStatistics);
    document.getElementById("textField").innerHTML += html;
}

function displayExperience(){
    let source = document.getElementById("displayExperience").innerHTML;
    let template = Handlebars.compile(source);
    let numberOfDrouges = {experience: mechanics.getCharacter().get_Experience(),
        neededExperienceForNextLevel: mechanics.experienceNeededToLevelUp()};
    let html = template(numberOfDrouges);
    document.getElementById("experience").innerHTML = html;
}

function displayCurrency(string){
    let source = document.getElementById("displayCurrency").innerHTML;
    let template = Handlebars.compile(source);
    let numberOfDrouges = {drougets: shop.getDrougets()};
    let html = template(numberOfDrouges);
    document.getElementById(string).innerHTML = html;
} 

function displayCharactersStats(character){
    let source = document.getElementById("displayCharacterStatsTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(character);
    document.getElementById("attributeDisplay").innerHTML = html;
} 
