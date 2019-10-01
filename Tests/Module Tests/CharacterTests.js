import Character from "../../Modules/Characters/CharacterClass.js";
import census_LookUp from "../../Modules/Characters/Census.js"


let assert = chai.assert;


let list_Of_Playable_Characters = ["Salamander", "Siren"];

describe("Creating Default Characters", function(){
    
    for (let character in list_Of_Playable_Characters){
        let name_Of_Character = list_Of_Playable_Characters[character];
        it(name_Of_Character, function(){
            let char = new Character("Adam", name_Of_Character);
            let character_For_Comparason = census_LookUp(name_Of_Character);
            
            assert(char.get_Name() === "Adam");
            assert(char.get_Level() === 1);
            assert(char.get_Experiance() === 0);
            assert(char.attribute_Comparer(character_For_Comparason) === true);
        })
    }
})