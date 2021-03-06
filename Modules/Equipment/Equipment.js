export default class Equipment {
    constructor() {
        this.weapon = null;
        this.head = null;
        this.torso = null;
        this.hands = null;
        this.waist = null;
        this.legs = null;
        this.feet = null;
    }
    equip(item) {
        let equipTo = item.equippableTo();
        if (equipTo == "Weapon") { this.weapon = item; }
        if (equipTo == "Head") { this.head = item; }
        if (equipTo == "Hands") { this.hands = item; }
        if (equipTo == "Torso") { this.torso = item; }
        if (equipTo == "Waist") { this.waist = item; }
        if (equipTo == "Legs") { this.legs = item; }
        if (equipTo == "Feet") { this.feet = item; }
    }

    unequip(item) {
        let equippedTo = item.equippableTo();
        if (equippedTo == "Weapon") { this.weapon = null; }
        if (equippedTo == "Head") { this.head = null; }
        if (equippedTo == "Hands") { this.hands = null; }
        if (equippedTo == "Torso") { this.torso = null; }
        if (equippedTo == "Waist") { this.waist = null; }
        if (equippedTo == "Legs") { this.legs = null; }
        if (equippedTo == "Feet") { this.feet = null; }
    }

    getWeapon() { return this.weapon; }

    getHead() { return this.head; }

    getHands() { return this.hands; }

    getTorso() { return this.torso; }

    getWaist() { return this.waist; }

    getLegs() { return this.legs; }

    getFeet() { return this.feet; }

    getStats() {
        let listOfBonusStats = { attack: 0, vitality: 0, fortitude: 0 };
        if (this.getWeapon() != null) {
            let dict = this.getWeapon().getStats()
            listOfBonusStats.attack += dict.attack;
            listOfBonusStats.vitality += dict.vitality;
            listOfBonusStats.fortitude += dict.fortitude;
        }

        if (this.getHead() != null) {
            let dict = this.getHead().getStats()
            listOfBonusStats.attack += dict.attack;
            listOfBonusStats.vitality += dict.vitality;
            listOfBonusStats.fortitude += dict.fortitude;
        }

        if (this.getTorso() != null) {
            let dict = this.getTorso().getStats()
            listOfBonusStats.attack += dict.attack;
            listOfBonusStats.vitality += dict.vitality;
            listOfBonusStats.fortitude += dict.fortitude;
        }

        return listOfBonusStats;
    }

    getEquippedGear() {
        let list = [];
        if (this.weapon != null) {
            list.push(this.weapon);
        }
        if (this.head != null) {
            list.push(this.head);
        }
        if (this.torso != null) {
            list.push(this.torso);
        }
        if (this.waist != null) {
            list.push(this.waist);
        }
        if (this.legs != null) {
            list.push(this.legs);
        }
        if (this.feet != null) {
            list.push(this.feet);
        }
        if (this.hands != null) {
            list.push(this.hands);
        }

        return list;
    }

    isEquippable(item) {
        let equipTo = item.equippableTo();
        if (equipTo == "Weapon" && this.getWeapon() == null) { return true }
        if (equipTo == "Head" && this.getHead() == null) { return true }
        if (equipTo == "Hands" && this.getHands() == null) { return true }
        if (equipTo == "Torso" && this.getTorso() == null) { return true }
        if (equipTo == "Waist" && this.getWaist() == null) { return true }
        if (equipTo == "Legs" && this.getLegs() == null) { return true }
        if (equipTo == "Feet" && this.getFeet() == null) { return true }

        return false;
    }
}