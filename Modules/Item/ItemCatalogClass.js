import Item from "./ItemClass.js"

export default class ItemCatalog{
    constructor(){}

    getItem(string){
        return catalog[string];
    }
}

let catalog = {
    "Rayashk" : new Item("Rayashk", 350, "Ledgendary Sword"),
    "Worlds End" : new Item("Worlds End", 1000, "Mythic Sword")
}