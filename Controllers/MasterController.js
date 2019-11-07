import TowerController from "./TowerController.js"
import Mechanics from "./CombatController.js"
import ShopController from "./ShopController.js"


let tower = new TowerController;
let mechanics = new Mechanics;
let shop = new ShopController;

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
        displayCurrency();

        displayNewPage(pageToBeHidden, pageToBeShown);
    }
    
    goToHomePageFromShop(){
        let pageToBeHidden = document.getElementById("shopPage");
        let pageToBeShown = document.getElementById("homePage");
        displayNewPage(pageToBeHidden, pageToBeShown);
    }
    
    goToHomePageFromCharacterCreationMenu() {
        let pageToBeHidden = document.getElementById("characterCreatePage");
        let pageToBeShown = document.getElementById("homePage");
        displayNewPage(pageToBeHidden, pageToBeShown);
        createTheRequestedCharacter(); // NO
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
            mechanics.levelUpCharacter(); 
            displayCurrency();
            showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
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
        } else {AIAttacks();} 
    
        if(isPlayerDead()){
            givePlayerDefeatedMessage(mechanics.getCharacter());
            showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
            hideTheAttackButton();
        }
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

function AIAttacks() { // NO
    let charactersHpBeforeCombat = mechanics.getCharacter().get_All_Attributes().vitality; // NO
    mechanics.AIsTurn(); // NO
    let charactersHpAfterCombat = mechanics.getCharacter().get_All_Attributes().vitality; // NO
    displayTheBattleReportForWhatHappenedToTheCharacterThisRound(charactersHpBeforeCombat, charactersHpAfterCombat);
    showEnemy(getPlayerCharacterInformation(mechanics.getEnemy()));
    showCharacter(getPlayerCharacterInformation(mechanics.getCharacter()));
}

function createTheRequestedCharacter() { // NO
    let requestedName = document.getElementById("name").value; // NO
    let requestedCharacter = document.getElementById("characterList").value; // NO
    mechanics.createCharacter(requestedName, requestedCharacter); // NO
}

function getPlayerCharacterInformation(character) {
    let playerCharactersStats = {
        name: character.get_Name(),
        level: character.get_Level(),
        hp: character.get_All_Attributes().vitality,
        projection: character.get_All_Attributes().projection,
        agility: character.get_All_Attributes().agility,
        fortitude: character.get_All_Attributes().fortitude,
        intelligence: character.get_All_Attributes().intelligence,
        willpower: character.get_All_Attributes().willpower,
        intimidation: character.get_All_Attributes().intimidation,
        experiance: character.get_Experience()};
        return playerCharactersStats;
}

function isEnemyDead(enemy) { // NO
    return enemy.get_All_Attributes().vitality <= 0; // NO
}

function isPlayerDead() { // NO
    return mechanics.getCharacter().get_All_Attributes().vitality <= 0; // NO
}

function putTheReportIntoTheTextBox(battleStatistics){
    let source = document.getElementById("battleReportTemplate").innerHTML;
    let template = Handlebars.compile(source);
    let html = template(battleStatistics);
    document.getElementById("textField").innerHTML += html;
}

function displayCurrency(){
    let source = document.getElementById("displayCurrency").innerHTML;
    let template = Handlebars.compile(source);
    console.log(mechanics.getCharacter().get_Experience())
    let numberOfDrouges = {drouges: shop.getDrougets(), experience: mechanics.getCharacter().get_Experience(),
        neededExperienceForNextLevel: mechanics.experienceNeededToLevelUp()};
    let html = template(numberOfDrouges);
    document.getElementById("currancy").innerHTML = html;
}
