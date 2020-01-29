export default class Combat {
    constructor() { }
    followTroughWithTheAttack(attacker, defender, attack) {
        let intimidation = attacker.get_All_Attributes().intimidation;
        let willpower = attacker.get_All_Attributes().willpower;
        let damage = attack;

        if (isCritical(intimidation)) {
            damage = calculateCritDamage(damage, willpower);
        }
        applyDamage(damage, defender);
        if (isDead(defender)) { addExperience(attacker, defender); }
    }
}

function isCritical(intimidation) {
    let randomNumberBetween0And1 = Math.random()
    let percentage = intimidation / 100;
    if ((randomNumberBetween0And1 + percentage) > 1) {
        return true;
    }
    else { return false; }
}

function calculateCritDamage(damage, willpower) {
    let bonusDamage = damage * (willpower / 10);
    let bonusDamageRounded = Math.round(bonusDamage);
    return (damage + bonusDamageRounded);
}

function applyDamage(totalDamage, defender) {
    let defendersFortitude = defender.get_All_Attributes().fortitude;
    let defendersVitality = defender.get_All_Attributes().vitality;
    let difference = Math.abs(totalDamage - defendersFortitude);

    defender.get_All_Attributes().vitality = (defendersVitality - difference);
}

function addExperience(character, enemy) {
    character.add_Experience(enemy.get_Experience());
}

function isDead(character) {
    if (character.get_All_Attributes().vitality <= 0) { return true; }
    else { return false }
}