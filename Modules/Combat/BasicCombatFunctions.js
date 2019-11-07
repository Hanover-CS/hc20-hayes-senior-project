
export function attack(attacker, defender){

    let attackersMight = attacker.get_All_Attributes().might;
    let attackersProjection = attacker.get_All_Attributes().projection;
    let defendersFortitude = defender.get_All_Attributes().fortitude;

    if (attackersMight >= attackersProjection){
        if(attackersMight < defendersFortitude){return;}
        else {followTroughWithTheAttack(attacker, defender, attackersMight);}
    }

    else {
        if(attackersProjection < defendersFortitude){return;}
        else {followTroughWithTheAttack(attacker, defender, attackersProjection);}
    }

    
}

function followTroughWithTheAttack(attacker, defender, mightOrProjection){
    let intimidation = attacker.get_All_Attributes().intimidation;
    let willpower = attacker.get_All_Attributes().willpower;
    let damage = mightOrProjection;

    if(isCritical(intimidation)){
        let totalDamage = calculateCritDamage(damage, willpower);
        applyDamage(totalDamage, defender);
        if(isDead(defender)){addExperience(attacker, defender);}
    }else{
        applyDamage(damage, defender);
        if(isDead(defender)){addExperience(attacker, defender);}
    }
}

function isCritical(intimidation){
    let randomNumberBetween0And1 = Math.random()
    let percentage = intimidation / 100;
    if((randomNumberBetween0And1 + percentage) > 1){
        return true;
    }
    else {return false;}
}

function calculateCritDamage(damage, willpower){
    let bonusDamage = damage * (willpower / 10);
    let bonusDamageRounded = Math.round(bonusDamage);
    return (damage + bonusDamageRounded);
}

function applyDamage(totalDamage, defender){
    let defendersFortitude = defender.get_All_Attributes().fortitude;
    let defendersVitality = defender.get_All_Attributes().vitality;
    let difference = Math.abs(totalDamage - defendersFortitude);

    defender.get_All_Attributes().vitality = (defendersVitality - difference);
}

function addExperience(character, enemy){
    character.add_Experience(enemy.get_Experience());
}



export function isDead(character){
    if (character.get_All_Attributes().vitality <= 0){return true;}
    else {return false}
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