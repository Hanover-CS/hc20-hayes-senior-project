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
        assert(stats.attack == 20);
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
    assert(equipment.getHead().getName() == "Legendary Fire head");
    assert(equipment.getHands().getName() == "Legendary Fire hands");
    assert(equipment.getTorso().getName() == "Legendary Fire torso");
    assert(equipment.getWaist().getName() == "Legendary Fire waist");
    assert(equipment.getLegs().getName() == "Legendary Fire legs");
    assert(equipment.getFeet().getName() == "Legendary Fire feet");
}

function unequipAllGearSlots() {
    equipment.unequip(catalog.getItem("Rayashk"));
    equipment.unequip(catalog.getItem("Legendary Fire head"));
    equipment.unequip(catalog.getItem("Legendary Fire hands"));
    equipment.unequip(catalog.getItem("Legendary Fire torso"));
    equipment.unequip(catalog.getItem("Legendary Fire waist"));
    equipment.unequip(catalog.getItem("Legendary Fire legs"));
    equipment.unequip(catalog.getItem("Legendary Fire feet"));
}

function equipAllGearSlots() {
    equipment.equip(catalog.getItem("Worlds End"));
    equipment.equip(catalog.getItem("Legendary Fire head"));
    equipment.equip(catalog.getItem("Legendary Fire hands"));
    equipment.equip(catalog.getItem("Legendary Fire torso"));
    equipment.equip(catalog.getItem("Legendary Fire waist"));
    equipment.equip(catalog.getItem("Legendary Fire legs"));
    equipment.equip(catalog.getItem("Legendary Fire feet"));
}
