import {attack, isDead, addExperience,
        isCritical, calculateCritDamage} from "../../Modules/Combat/BasicCombatFunctions.js";
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