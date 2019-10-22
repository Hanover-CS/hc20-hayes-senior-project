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