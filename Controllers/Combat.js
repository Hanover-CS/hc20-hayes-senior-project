import {generateEnemy, scaleEnemy, establishTurnOrder} from "../Modules/Combat/BasicCombatFunctions.js"
import Character from "../Modules/Characters/CharacterClass.js"
import {BasicCombat} from "../Modules/Combat/BasicCombatFunctions.js"

let basicCombat = new BasicCombat;

let listOfCharacter = [];
let listOfEnemies = [];
let allCombatents = [];


export default class Mechanics{
    constructor(){}

    // Player Related Functions
    createCharacter(name, race){
        console.log("asd")
        let character = new Character(name, race);
        listOfCharacter.push(character);
    }

    getCharacter(){
        return listOfCharacter[0];
    }

    playerCharacterReset(){
        let hp = listOfCharacter[0].get_TempHp();
        listOfCharacter[0].get_All_Attributes().vitality = hp;
    }
    
    isCharacterAbleToLevelUp(){
        if(listOfCharacter[0].get_Experience() >= this.experienceNeededToLevelUp()){
            listOfCharacter[0].add_Experience(-this.experienceNeededToLevelUp());
            return true;
        }else{
            return false;
        }
    }

    experienceNeededToLevelUp(){
        let level = listOfCharacter[0].get_Level();
        return (100 * (level)) * level;
    }

    deletePlayerCharacter(){
        listOfCharacter.pop();
    }

    levelUpCharacter(){
        listOfCharacter[0].level_Up();
    }

    // Enemy Related Functions
    getEnemy(){
        return listOfEnemies[0];
    }

    createEnemy(towerFloor, towerWave){
        console.log(towerFloor, towerWave)
        let enemiesName = generateEnemy(towerFloor, towerWave);
        let enemy = new Character(enemiesName, enemiesName)
        scaleEnemy(enemy, towerFloor, towerWave);
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
        basicCombat.attack(listOfEnemies[0], listOfCharacter[0]);
    }

    // Random Functions
    attackFunction(){
        basicCombat.attack(listOfCharacter[0], listOfEnemies[0]);
    }

    getTurnOrder(){
        allCombatents = [listOfEnemies[0], listOfCharacter[0]];
        establishTurnOrder(allCombatents);
    }
}