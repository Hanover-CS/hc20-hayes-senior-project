import Item from "./ItemClass.js"

export default class ItemCatalog {
    constructor() { }

    getItem(string) {
        return catalog[string];
    }

    allBuyableOptions() {
        let list = [];
        for (let key in catalog) {
            list.push(catalog[key])
        }
        return list
    }
}

let catalog = {
    // Weapons
    "Rayashk": new Item("Rayashk", 500, "Ledgendary Sword that was give as the prize" +
         "in the legendary tournimate of kings", "Weapon", { attack: 20, vitality: 0, fortitude: 0 }),
    "Worlds End": new Item("Worlds End", 5000, "Mythic Sword", "Weapon", { attack: 200, vitality: 0, fortitude: 0 }),

    // Starter Gear Set
    "Thronian Helm": new Item("Thronian Helm", 1500, "The Helmets Worn by the Royal Thronian Guard.", "Head", 
        { attack: 0, vitality: 10, fortitude: 5 }),
    "Thronian ChestGuard": new Item("Thronian ChestGuard", 1500, "The ChestGuards Worn by the Royal Thronian Guard.", "Torso", 
        { attack: 0, vitality: 20, fortitude: 10 }),
    "Thronian Gauntlets": new Item("Thronian Gauntlets", 1500, "The Gauntlets Worn by the Royal Thronian Guard.", "Hands", 
        { attack: 5, vitality: 0, fortitude: 3 }),
    "Thronian Belt": new Item("Thronian Belt", 1500, "The Belts Worn by the Royal Thronian Guard.", "Waist", 
        { attack: 0, vitality: 5, fortitude: 6 }),
    "Thronian Pants": new Item("Thronian Pants", 1500, "The Pants Worn by the Royal Thronian Guard.", "Legs", 
        { attack: 0, vitality: 20, fortitude: 10 }),
    "Thronian Boots": new Item("Thronian Boots", 1500, "The Boots Worn by the Royal Thronian Guard.", "Feet", 
        { attack: 0, vitality: 5, fortitude: 5 })
}