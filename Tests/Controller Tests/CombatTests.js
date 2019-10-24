import {attack, isDead, addExperience,
        isCritical, calculateCritDamage,
        establishTurnOrder, howManyTurns,
        scaleEnemy, generateEnemy} from "../../Modules/Combat/BasicCombatFunctions.js";
import Character from "../../Modules/Characters/CharacterClass.js";

let assert = chai.assert;


describe("Combat Module Basic Combat Tests: attack Function", function(){
    it("Attacters attack is greater than defenders defence", function(){
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");
        
        assert(defender.get_All_Attributes().vitality == 50);
        attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 0);
    })

    it("Attacters attack is equal to the defenders defence", function(){
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");

        attacker.get_All_Attributes().projection = 10;
        defender.get_All_Attributes().fortitude = 10;

        assert(defender.get_All_Attributes().vitality == 50);
        attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 50);

    })

    it("Attacters attack is less than the defenders defence", function(){
        let attacker = new Character("Attacker", "Salamander");
        let defender = new Character("Defender", "Rotting Zombie");

        attacker.get_All_Attributes().projection = 1;
        defender.get_All_Attributes().fortitude = 10;

        assert(defender.get_All_Attributes().vitality == 50);
        attack(attacker, defender);
        assert(defender.get_All_Attributes().vitality == 50);

    })
})

describe("Combat Module Basic Combat Tests: isDead Function", function(){

    it("Vitality < 0", function(){
        let testSubject = new Character("testSubject", "Rotting Zombie");
        testSubject.get_All_Attributes().vitality = -10;
        assert(isDead(testSubject));
    })

    it("Vitality = 0", function(){
        let testSubject = new Character("testSubject", "Rotting Zombie");
        testSubject.get_All_Attributes().vitality = 0;
        assert(isDead(testSubject));
    })

    it("Vitality > 0", function(){
        let testSubject = new Character("testSubject", "Rotting Zombie");
        assert(!isDead(testSubject));
    })
})

describe("Combat Module Basic Combat Tests: addExperience Function", function(){
    it("Can add 0 Experience to a character", function(){
        let character = new Character("Attacker", "Salamander");
        let enemy = new Character("testSubject", "Rotting Zombie");
        assert(character.get_Experience() == 0);
        assert(character.get_Experience() == 0);
        addExperience(character, enemy);
        assert(character.get_Experience() == 0);
    })

    it("Can add a positive number for experience to a character", function(){
        let character = new Character("Attacker", "Salamander");
        let enemy = new Character("testSubject", "Rotting Zombie");
        assert(character.get_Experience() == 0);
        assert(enemy.add_Experience(100));
        addExperience(character, enemy);
        assert(character.get_Experience() == 100);

    })
})

describe("Combat Module Basic Combat Tests: isCrit Function", function(){
    it("Given a 0 Crit Rate, it Cannot Crit", function(){
        for(let i = 0; i < 100; i++){
            chai.assert(isCritical(0) == false);
        }
    })

    it("Given a 100% Crit Rate, Crits every time", function(){
        for(let i = 0; i < 100; i++){
            chai.assert(isCritical(100) == true);
        }
    })
})

describe("Combat Module Basic Combat Tests: calculateCritDamage Function", function(){
    it("Given a miltiplier of 0%, Crit Damage == Damage", function(){
        chai.assert(calculateCritDamage(100, 0) == 100);
    })

    it("Given a miltiplier of 100%, Crit Damage == X2 Damage", function(){
        chai.assert(calculateCritDamage(43, 10) == 86);
    })

    it("Given a miltiplier of 50%, Crit Damage == X1.5 Damage", function(){
        chai.assert(calculateCritDamage(13, 5) == 20);
    })

    it("Given a miltiplier of 30%, Crit Damage == X1.3 Damage", function(){
        chai.assert(calculateCritDamage(13, 3) == 17);
    })
})

describe("Combat Module Basic Combat Tests: establishTurnOrder Function", function(){

    let char1 = new Character("Salamander", "Salamander");
    let char2 = new Character("Zombie", "Rotting Zombie");
    let char3 = new Character("Siren", "Siren");
    let char4 = new Character("Sylph", "Sylph");
    let unsortedList = [char1, char2, char3, char4];
    it("Sorts an unsorted list of 4 characters", function(){
        let sortedList = establishTurnOrder(unsortedList);
        chai.assert(sortedList[0] == char4);
        chai.assert(sortedList[1] == char3);
        chai.assert(sortedList[2] == char1);
        chai.assert(sortedList[3] == char2);
    })
})

describe("Combat Module Basic Combat Tests: howManyTurns", function(){
    it("Given 80 agility, returns 1", function(){
        chai.assert(howManyTurns(80) == 1);
    })

    it("Given 100 agility, returns 1", function(){
        chai.assert(howManyTurns(100) == 1);
    })

    it("Given 160 agility, returns 2", function(){
        chai.assert(howManyTurns(160) == 2);
    })

    it("Given 500 agility, returns 2", function(){
        chai.assert(howManyTurns(500) == 6);
    })
})

describe("Combat Module Basic Combat Tests: scaleEnemy", function(){
    it("Takes a lvl 1 enemy, 1st floor, 1st wave, returns enemy lvl 1", function(){
        let enemy = new Character("Zombie", "Rotting Zombie");
        scaleEnemy(enemy, 1, 1);
        chai.assert(enemy.get_Level() == 1);
    })

    it("Takes a lvl 1 enemy, 1st floor, 3rd wave, returns enemy lvl 3", function(){
        let enemy = new Character("Zombie", "Rotting Zombie");
        scaleEnemy(enemy, 1, 3);
        chai.assert(enemy.get_Level() == 3);
    })

    it("Takes a lvl 1 enemy, 1st floor, 3rd wave, returns enemy lvl 2", function(){
        let enemy = new Character("Zombie", "Rotting Zombie");
        scaleEnemy(enemy, 2, 1);
        chai.assert(enemy.get_Level() == 2);
    })

    it("Takes a lvl 1 enemy, 100th floor, 2rd wave, returns enemy lvl 101", function(){
        let enemy = new Character("Zombie", "Rotting Zombie");
        scaleEnemy(enemy, 100, 2);
        console.log(enemy.get_Level())
        chai.assert(enemy.get_Level() == 101);
    })
})

// needs good tests
describe("Combat Module Basic Combat Tests: generateEnemy", function(){
    it("generates a random enemy", function(){
        for(let i = 0; i < 10; i++){
            let enemy = generateEnemy(3, 2);
            console.log(enemy);
        }
    })
})