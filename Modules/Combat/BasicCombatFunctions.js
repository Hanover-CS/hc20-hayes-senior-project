import Combat from "./Combat.js"

export default class BasicCombat extends Combat {
    constructor() {
        super();
    }

    attack(attacker, defender) {

        let attackersAttack = attacker.get_All_Attributes().attack;
        let defendersFortitude = defender.get_All_Attributes().fortitude;
        if (attackersAttack < defendersFortitude) { return; }
        else { super.followTroughWithTheAttack(attacker, defender, attackersAttack); }
    }

    establishTurnOrder(listOfCharacters) {
        for (let j = 0; j < listOfCharacters.length; j++) {
            for (let i = 1; i < listOfCharacters.length; i++) {
                let speed1 = listOfCharacters[i - 1].get_All_Attributes().agility;
                let speed2 = listOfCharacters[i].get_All_Attributes().agility;
                if (speed1 <= speed2) {
                    let hold1 = listOfCharacters[i - 1];
                    let hold2 = listOfCharacters[i];
                    listOfCharacters[i - 1] = hold2;
                    listOfCharacters[i] = hold1;
                }
            }
        }
        return listOfCharacters;
    }

    scaleEnemy(enemy, floor, wave) {
        for (let i = 0; i < (floor + wave) - 2; i++) {
            enemy.level_Up();
        }
        let num = generateExperience(floor, wave);
        enemy.add_Experience(num);
    }

    generateEnemy() {
        let randomNumber = Math.random();
        if (randomNumber <= .5) return "Rotting Zombie";
        return "Skeleton";
    }
}

function generateExperience(floor, wave) {
    let counter = 0;
    for (let i = 0; i < floor; i++) {
        for (let j = 0; j < wave; j++) {
            counter += (i + j) * 5;
        }
    }
    counter += 100;
    return counter;
}
