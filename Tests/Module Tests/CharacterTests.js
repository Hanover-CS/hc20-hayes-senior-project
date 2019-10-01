import Character from "../../Modules/Characters/CharacterClass.js"

let char = new Character("Liz", "Salamander");



describe("Creating Default Characters", function(){
    it("Salamander", function(){
        chai.assert(char.get_Level() === 1);
    })
})