import Character from "../Modules/Characters/CharacterClass.js"
import BasicCombat from "../Modules/Combat/BasicCombatFunctions.js"

let basicCombat = new BasicCombat;

let listOfEnemies = [];
let allCombatents = [];
let playerCharacter


export default class Mechanics{
    constructor(){}

    // Player Related Functions
    apply_Level_Up_Points(string){
        playerCharacter.apply_Level_Up_Points(string);
    }

    isNotAbleToSpendAnotherPoint(){
       if(playerCharacter.get_Level_Up_Points() <= 0){return true;}
    }

    createCharacter(name, race){
        let character = new Character(name, race);
        playerCharacter = character;
    }

    getCharacter(){
        return playerCharacter;
    }

    playerCharacterReset(){
        let hp = playerCharacter.getUnalteredVitality();
        playerCharacter.get_All_Attributes().vitality = hp;
    }
    
    isCharacterAbleToLevelUp(){
        if(playerCharacter.get_Experience() >= this.experienceNeededToLevelUp()){
            playerCharacter.add_Experience(-this.experienceNeededToLevelUp());
            return true;
        }else{
            return false;
        }
    }

    experienceNeededToLevelUp(){
        let level = playerCharacter.get_Level();
        return (100 * (level)) * level;
    }

    deletePlayerCharacter(){
        playerCharacter = null;
    }

    levelUpCharacter(){
        playerCharacter.level_Up();
    }

    equip(item){
        playerCharacter.equip(item);
    }

    unequip(item){
        playerCharacter.unequip(item);
    }

    getEquippedGear(){
        return playerCharacter.getEquippedGear();
    }

    isEquippable(item){
        return playerCharacter.isEquippable(item);
    }

    // Enemy Related Functions
    getEnemy(){
        return listOfEnemies[0];
    }

    createEnemy(towerFloor, towerWave){
        let enemiesName = basicCombat.generateEnemy(towerFloor, towerWave);
        let enemy = new Character(enemiesName, enemiesName)
        basicCombat.scaleEnemy(enemy, towerFloor, towerWave);
        listOfEnemies.push(enemy);
    }

    deleteEnemy(){
        listOfEnemies.pop();
    }

    isAIsTurn(){
        if(allCombatents[0] == listOfEnemies[0]){
            return true;
        }else{
            return false;
        }
    }

    AIsTurn(){
        basicCombat.attack(listOfEnemies[0], playerCharacter);
    }

    // Random Functions
    attackFunction(){
        basicCombat.attack(playerCharacter, listOfEnemies[0]);
    }

    getTurnOrder(){
        allCombatents = [listOfEnemies[0], playerCharacter];
        basicCombat.establishTurnOrder(allCombatents);
    }
}