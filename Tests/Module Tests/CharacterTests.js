import Character from "../../Modules/Characters/CharacterClass.js";
import {census_LookUp, get_The_LevelUp_Guide} from "../../Modules/Characters/Census.js"


let assert = chai.assert;


let list_Of_Playable_Characters = ["Salamander", "Siren"];
let list_Of_NonPlayable_Characters = ["Rotting Zombie"];

describe("Characters Module", function(){
    
    character_Builder_And_Tester(list_Of_Playable_Characters);
    character_Builder_And_Tester(list_Of_NonPlayable_Characters);
    
})


function character_Builder_And_Tester(list_Of_Characters) {
    for (let character in list_Of_Characters) {
        let name_Of_Character = list_Of_Characters[character];
        it("Can create a " + name_Of_Character, function () {

            let char = new Character(name_Of_Character, name_Of_Character);
            let character_For_Comparason = census_LookUp(name_Of_Character);

            assert(char.get_Name() === list_Of_Characters[character]);
            experience_Incrementor(char);
            assert(char.attribute_Comparer(character_For_Comparason) === true);
            level_Incrementer(char);
        });
    }
}

function experience_Incrementor(char) {
    let accumulator = 0;
    for (let i = 0; i < 20; i++) {
        accumulator += i * 5;
        char.add_Experience(i * 5);
        assert(char.get_Experience() === accumulator);
    }
}

function level_Incrementer(char) {

    let previous_Might          = char.get_All_Attributes().might
    let previous_Projection     = char.get_All_Attributes().projection
    let previous_Vitality       = char.get_All_Attributes().vitality
    let previous_Fortitude      = char.get_All_Attributes().fortitude
    let previous_Agility        = char.get_All_Attributes().agility
    let previous_Intelligence    = char.get_All_Attributes().intelligence
    let previous_Willpower      = char.get_All_Attributes().willpower
    let previous_Intimidation   = char.get_All_Attributes().intimidation
    let guide = get_The_LevelUp_Guide(char.get_Name());
    for (let i = 0; i < 10; i++) {

        char.level_Up();
        assert(char.get_Level() === i + 2);
        assert(char.get_All_Attributes().might          == previous_Might + guide.might * (i+1));
        assert(char.get_All_Attributes().projection     == previous_Projection + guide.projection * (i+1));
        assert(char.get_All_Attributes().vitality       == previous_Vitality + guide.vitality * (i+1));
        assert(char.get_All_Attributes().fortitude      == previous_Fortitude + guide.fortitude * (i+1));
        assert(char.get_All_Attributes().agility        == previous_Agility + guide.agility * (i+1));
        assert(char.get_All_Attributes().intelligence    == previous_Intelligence + guide.intelligence * (i+1));
        assert(char.get_All_Attributes().willpower      == previous_Willpower + guide.willpower * (i+1));
        assert(char.get_All_Attributes().intimidation   == previous_Intimidation + guide.intimidation * (i+1));
    }
}
