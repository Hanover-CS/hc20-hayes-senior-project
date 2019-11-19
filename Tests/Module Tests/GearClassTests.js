import EquippedGear from "../../Modules/Gear/GearClass.js";
import ItemCatalog from "../../Modules/Item/ItemCatalogClass.js";

let catalog = new ItemCatalog;
let gearClass = new EquippedGear;

let assert = chai.assert;

describe("Gear Class", function(){

    it("Can equip a full set of gear", function(){
        let weapon = catalog.getItem("Rayashk");
        let head = catalog.getItem("Legendary Fire head");
        let hands = catalog.getItem("Legendary Fire hands");
        let torso = catalog.getItem("Legendary Fire torso");
        let waist = catalog.getItem("Legendary Fire waist");
        let legs = catalog.getItem("Legendary Fire legs");
        let feet = catalog.getItem("Legendary Fire feet");
        gearClass.equip(weapon);
        gearClass.equip(head);
        gearClass.equip(hands);
        gearClass.equip(torso);
        gearClass.equip(waist);
        gearClass.equip(legs);
        gearClass.equip(feet);
        assert(gearClass.getWeapon().getName() == "Rayashk");
        assert(gearClass.getHead().getName() == "Legendary Fire head");
        assert(gearClass.getHands().getName() == "Legendary Fire hands");
        assert(gearClass.getTorso().getName() == "Legendary Fire torso");
        assert(gearClass.getWaist().getName() == "Legendary Fire waist");
        assert(gearClass.getLegs().getName() == "Legendary Fire legs");
        assert(gearClass.getFeet().getName() == "Legendary Fire feet");
    })  
    
    it("Can un-equip a full set of gear", function(){
        let weapon = catalog.getItem("Rayashk");
        let head = catalog.getItem("Legendary Fire head");
        let hands = catalog.getItem("Legendary Fire hands");
        let torso = catalog.getItem("Legendary Fire torso");
        let waist = catalog.getItem("Legendary Fire waist");
        let legs = catalog.getItem("Legendary Fire legs");
        let feet = catalog.getItem("Legendary Fire feet");
        gearClass.unequip(weapon);
        gearClass.unequip(head);
        gearClass.unequip(hands);
        gearClass.unequip(torso);
        gearClass.unequip(waist);
        gearClass.unequip(legs);
        gearClass.unequip(feet);
        assert(gearClass.getWeapon() == null);
        assert(gearClass.getHead() == null);
        assert(gearClass.getHands() == null);
        assert(gearClass.getTorso() == null);
        assert(gearClass.getWaist() == null);
        assert(gearClass.getLegs() == null);
        assert(gearClass.getFeet() == null);
    })
})