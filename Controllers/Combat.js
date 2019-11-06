import {attack, generateEnemy, scaleEnemy, establishTurnOrder} from "../Modules/Combat/BasicCombatFunctions.js"
import Tower from "../Modules/Tower/Tower.js" //
import Character from "../Modules/Characters/CharacterClass.js"


let tower = new Tower(); // 


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
        if(listOfCharacter[0].get_Experience() >= 100){
            listOfCharacter[0].add_Experience(-100);
            return true;
        }else{
            return false;
        }
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

    createEnemy(){
        let towerFloor = tower.getFloor();
        let towerWave = tower.getWave();
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
        attack(listOfEnemies[0], listOfCharacter[0]);
    }

    // Random Functions
    attackFunction(){
        attack(listOfCharacter[0], listOfEnemies[0]);
    }

    getTurnOrder(){
        allCombatents = [listOfEnemies[0], listOfCharacter[0]];
        establishTurnOrder(allCombatents);
    }
}