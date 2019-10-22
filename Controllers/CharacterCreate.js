import Character from "../Modules/Characters/CharacterClass.js"

let list = [];

let submitButton = document.getElementById("submitButton");

submitButton.onclick = function(){
    let requestedName = document.getElementById("name").value;
    let requestedCharacter = document.getElementById("characterList").value;

    let character = new Character(requestedName, requestedCharacter);
    list.push(character);
}

