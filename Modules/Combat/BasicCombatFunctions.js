import {census_LookUp} from "../Characters/Census.js"


export function attack(attacker, defender){

    let attackersMight = attacker.get_All_Attributes().might;
    let attackersProjection = attacker.get_All_Attributes().projection;
    let defendersVitality = defender.get_All_Attributes().vitality;
    let defendersFortitude = defender.get_All_Attributes().fortitude;

    if (attackersMight >= attackersProjection){
        if(isAttackLessThanFortitude(attackersMight, defendersFortitude)){return;}
        else {getNewVitality(attackersMight, defendersVitality, defendersFortitude);}
    }

    else {
        if(isAttackLessThanFortitude(attackersProjection, defendersFortitude)){return;}
        else {getNewVitality(attackersProjection, defendersVitality, defendersFortitude);}
    }

    function isAttackLessThanFortitude(attackersAttack, defendersFortitude) {
        return attackersAttack <= defendersFortitude;
    }

    function getNewVitality(attackersAttackPower, defendersVitality, defendersFortitude) {
        let difference = Math.abs(attackersAttackPower - defendersFortitude);
        defender.get_All_Attributes().vitality = (defendersVitality - difference);
    }
}

export function isDead(character){
    if (character.get_All_Attributes().vitality <= 0){return true;}
    else {return false}
}

export function addExperience(character, enemy){
    character.add_Experience(enemy.get_Experience());
}

export function isCritical(intimidation){
    let randomNumberBetween0And1 = Math.random()
    let percentage = intimidation / 100;
    if((randomNumberBetween0And1 + percentage) > 1){
        return true;
    }
    else {return false;}
}

export function calculateCritDamage(damage, wisdom){
    let bonusDamage = damage * (wisdom / 10);
    let bonusDamageRounded = Math.round(bonusDamage);
    return (damage + bonusDamageRounded);
}

export function establishTurnOrder(listOfCharacters){
    for(let j = 0; j < listOfCharacters.length; j++){
        for(let i = 1; i < listOfCharacters.length; i++){
            let speed1 = listOfCharacters[i-1].get_All_Attributes().agility;
            let speed2 = listOfCharacters[i].get_All_Attributes().agility;
                if(speed1 <= speed2){
                    let hold1 = listOfCharacters[i-1];
                    let hold2 = listOfCharacters[i];
                    listOfCharacters[i-1] = hold2;
                    listOfCharacters[i] = hold1;
                }
        }
    }
    return listOfCharacters;
}

export function howManyTurns(agility){
    let numberOfTurns = Math.floor(agility / 80);
    return numberOfTurns;
}

export function scaleEnemy(enemy, floor, wave){

    for (let i = 0; i < (floor + wave) - 2; i++) {
        enemy.level_Up();
    }
}

export function generateEnemy(floor, wave){
    let randomNumber = Math.random();

    if(floor % 10 == 0 && wave == 3){
        //return the appropreate boss
    }
    if(floor > 0 && floor <= 10){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 10 && floor <= 20){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 20 && floor <= 30){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 30 && floor <= 40){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 40 && floor <= 50){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 50 && floor <= 60){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 60 && floor <= 70){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 70 && floor <= 80){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 80 && floor <= 90){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
    else if(floor > 90 && floor <= 100){
        if (randomNumber <= .5){
            return census_LookUp("Rotting Zombie");
        }
        else {
            return census_LookUp("Skeleton");
        }
    }
}