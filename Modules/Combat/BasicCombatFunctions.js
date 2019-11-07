import Combat from "./Combat.js"

export class BasicCombat extends Combat{
    constructor(){
        super();
    }
    
    attack(attacker, defender){
    
        let attackersMight = attacker.get_All_Attributes().might;
        let attackersProjection = attacker.get_All_Attributes().projection;
        let defendersFortitude = defender.get_All_Attributes().fortitude;
    
        if (attackersMight >= attackersProjection){
            if(attackersMight < defendersFortitude){return;}
            else {super.followTroughWithTheAttack(attacker, defender, attackersMight);}
        }
    
        else {
            if(attackersProjection < defendersFortitude){return;}
            else {super.followTroughWithTheAttack(attacker, defender, attackersProjection);}
        }
    }
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
    let num = generateExperience(floor, wave);
    enemy.add_Experience(num);
}

export function generateEnemy(floor, wave){
    let randomNumber = Math.random();

    if(floor % 10 == 0 && wave == 3){
        //return the appropreate boss
    }
    if(floor > 0 && floor <= 10){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 10 && floor <= 20){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 20 && floor <= 30){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 30 && floor <= 40){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 40 && floor <= 50){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 50 && floor <= 60){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 60 && floor <= 70){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 70 && floor <= 80){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 80 && floor <= 90){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
    else if(floor > 90 && floor <= 100){
        if (randomNumber <= .5){
            return "Rotting Zombie";
        }
        else {
            return "Skeleton";
        }
    }
}

function generateExperience(floor, wave){
    let counter = 0;
    for (let i = 0; i < floor; i++){
        for(let j = 0; j < wave; j ++){
            counter += (i+j) * 5;
        }
    }
    counter += 10;
    return counter;
}