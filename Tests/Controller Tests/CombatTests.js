import BasicCombat from "../../Modules/Combat/BasicCombatFunctions.js";
import Character from "../../Modules/Characters/CharacterClass.js";

let assert = chai.assert;
let basicAttack = new BasicCombat;


describe("Combat Module", function () {
    it("attack called with an attacker with 50 attack and defender with 50 hp, 0 def non crit", function () {
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");
        attacker.get_All_Attributes().attack = 50;
        attacker.get_All_Attributes().intimidation = 0;
        defender.get_All_Attributes().vitality = 50;
        defender.add_Experience(50);

        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 0);
        assert(attacker.get_Experience() == 50);
    })

    it("attack called with an attacker with 50 attack and defender with 50 hp, 50 def non crit", function () {
        let attacker = new Character("Attacker", "Sylph");
        let defender = new Character("Defender", "Rotting Zombie");
        attacker.get_All_Attributes().attack = 50;
        attacker.get_All_Attributes().intimidation = 0;
        defender.get_All_Attributes().vitality = 50;
        defender.get_All_Attributes().fortitude = 50;
        defender.add_Experience(50);

        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 50);
        assert(attacker.get_Experience() == 0);
    })

    it("attack called with an attacker with 50 attack and defender with 100 hp, 0 def none critical strike", function () {
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");
        attacker.get_All_Attributes().attack = 50;
        attacker.get_All_Attributes().intimidation = 0;
        defender.get_All_Attributes().vitality = 100;
        defender.add_Experience(33);

        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 50);
        assert(attacker.get_Experience() == 0);
        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 0);
        assert(attacker.get_Experience() == 33);
    })
    it("attack called with an attacker with 50 attack and defender with 100 hp, 0 def critical strike with X2 damage", function () {
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");
        attacker.get_All_Attributes().attack = 50;
        attacker.get_All_Attributes().intimidation = 100;
        attacker.get_All_Attributes().willpower = 10;
        defender.get_All_Attributes().vitality = 100;
        defender.add_Experience(33);

        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 0);
        assert(attacker.get_Experience() == 33);
    })

    it("attack called with an attacker with 50 attack and defender with 100 hp, 50 def critical strike with X2 damage", function () {
        let attacker = new Character("Attacker", "Golom");
        let defender = new Character("Defender", "Rotting Zombie");
        attacker.get_All_Attributes().attack = 50;
        attacker.get_All_Attributes().intimidation = 100;
        attacker.get_All_Attributes().willpower = 10;
        defender.get_All_Attributes().vitality = 100;
        defender.get_All_Attributes().fortitude = 50;
        defender.add_Experience(33);

        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 50);
        basicAttack.attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 0);
        assert(attacker.get_Experience() == 33);
    })
})


describe("Combat Module Basic Combat Tests: establishTurnOrder Function", function () {

    let char1 = new Character("Salamander", "Salamander");
    let char2 = new Character("Zombie", "Rotting Zombie");
    let char3 = new Character("Siren", "Siren");
    let char4 = new Character("Sylph", "Sylph");
    let unsortedList = [char1, char2, char3, char4];
    it("Sorts an unsorted list of 4 characters", function () {
        let sortedList = basicAttack.establishTurnOrder(unsortedList);
        chai.assert(sortedList[0] == char4);
        chai.assert(sortedList[1] == char3);
        chai.assert(sortedList[2] == char1);
        chai.assert(sortedList[3] == char2);
    })
})

describe("Combat Module Basic Combat Tests: scaleEnemy", function () {
    it("Takes a lvl 1 enemy, 1st floor, 1st wave, returns enemy lvl 1", function () {
        let enemy = new Character("Zombie", "Rotting Zombie");
        basicAttack.scaleEnemy(enemy, 1, 1);
        chai.assert(enemy.get_Level() == 1);
    })

    it("Takes a lvl 1 enemy, 1st floor, 3rd wave, returns enemy lvl 3", function () {
        let enemy = new Character("Zombie", "Rotting Zombie");
        basicAttack.scaleEnemy(enemy, 1, 3);
        chai.assert(enemy.get_Level() == 3);
    })

    it("Takes a lvl 1 enemy, 1st floor, 3rd wave, returns enemy lvl 2", function () {
        let enemy = new Character("Zombie", "Rotting Zombie");
        basicAttack.scaleEnemy(enemy, 2, 1);
        chai.assert(enemy.get_Level() == 2);
    })

    it("Takes a lvl 1 enemy, 100th floor, 2rd wave, returns enemy lvl 101", function () {
        let enemy = new Character("Zombie", "Rotting Zombie");
        basicAttack.scaleEnemy(enemy, 100, 2);
        chai.assert(enemy.get_Level() == 101);
    })
})