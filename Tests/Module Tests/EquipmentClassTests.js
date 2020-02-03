import Equipment from "../../Modules/Equipment/Equipment.js"
import ItemCatalog from "../../Modules/Item/ItemCatalogClass.js";

let catalog = new ItemCatalog;
let equipment = new Equipment;

let assert = chai.assert;

describe("Equipment Class", function () {

    it("Can equip a full set of gear", function () {
        equipAllGearSlots();
        assertAllGearSlotsAreEquippedCorrectly();
    })

    it("Can un-equip a full set of gear", function () {
        unequipAllGearSlots();
        assertAllGearSlotsAreEmpty();
    })

    it("Get bonus Stats of equipped weapon", function () {
        equipAllGearSlots();
        let stats = equipment.getStats();
        console.log(stats)
        assert(stats.attack >= 0);
    })

    it("Get bonus Stats of unequipped weapon", function () {
        unequipAllGearSlots();
        let stats = equipment.getStats();
        assert(stats.attack == 0);
    })

    it("Knows if an area is already equipped - Area equipped", function () {
        let item = catalog.getItem("Rayashk");
        equipAllGearSlots();
        assert(equipment.isEquippable(item) == false);
        unequipAllGearSlots();
        assert(equipment.isEquippable(item) == true);
    })
    it("Knows if an area is already equipped - Area not equipped", function () {
        let item = catalog.getItem("Rayashk");
        unequipAllGearSlots();
        assert(equipment.isEquippable(item) == true);
    })
})

function assertAllGearSlotsAreEmpty() {
    assert(equipment.getWeapon() == null);
    assert(equipment.getHead() == null);
    assert(equipment.getHands() == null);
    assert(equipment.getTorso() == null);
    assert(equipment.getWaist() == null);
    assert(equipment.getLegs() == null);
    assert(equipment.getFeet() == null);
}

function assertAllGearSlotsAreEquippedCorrectly() {
    assert(equipment.getWeapon().getName() == "Worlds End");
    assert(equipment.getHead().getName() == "Thronian Helm");
    assert(equipment.getHands().getName() == "Thronian Gauntlets");
    assert(equipment.getTorso().getName() == "Thronian ChestGuard");
    assert(equipment.getWaist().getName() == "Thronian Belt");
    assert(equipment.getLegs().getName() == "Thronian Pants");
    assert(equipment.getFeet().getName() == "Thronian Boots");
}

function unequipAllGearSlots() {
    equipment.unequip(catalog.getItem("Rayashk"));
    equipment.unequip(catalog.getItem("Thronian Helm"));
    equipment.unequip(catalog.getItem("Thronian Gauntlets"));
    equipment.unequip(catalog.getItem("Thronian ChestGuard"));
    equipment.unequip(catalog.getItem("Thronian Belt"));
    equipment.unequip(catalog.getItem("Thronian Pants"));
    equipment.unequip(catalog.getItem("Thronian Boots"));
}

function equipAllGearSlots() {
    equipment.equip(catalog.getItem("Worlds End"));
    equipment.equip(catalog.getItem("Thronian Helm"));
    equipment.equip(catalog.getItem("Thronian Gauntlets"));
    equipment.equip(catalog.getItem("Thronian ChestGuard"));
    equipment.equip(catalog.getItem("Thronian Belt"));
    equipment.equip(catalog.getItem("Thronian Pants"));
    equipment.equip(catalog.getItem("Thronian Boots"));
}
