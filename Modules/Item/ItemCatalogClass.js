import Item from "./ItemClass.js"

export default class ItemCatalog{
    constructor(){}

    getItem(string){
        return catalog[string];
    }
}

let catalog = {
    "Rayashk" : new Item("Rayashk", 350, "Ledgendary Sword", "Weapon", {projection: 10}),
    "Worlds End" : new Item("Worlds End", 1000, "Mythic Sword", "Weapon", {projection: 10}),

    // Legendary Gear Set - Fire
    "Legendary Fire head" : new Item("Legendary Fire head", 1000, "description", "Head"),
    "Legendary Fire torso" : new Item("Legendary Fire torso", 1000, "description", "Torso"),
    "Legendary Fire hands" : new Item("Legendary Fire hands", 1000, "description", "Hands"),
    "Legendary Fire waist" : new Item("Legendary Fire waist", 1000, "description", "Waist"),
    "Legendary Fire legs" : new Item("Legendary Fire legs", 1000, "description", "Legs"),
    "Legendary Fire feet" : new Item("Legendary Fire feet", 1000, "description", "Feet")
}