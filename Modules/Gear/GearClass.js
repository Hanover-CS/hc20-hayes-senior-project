export default class EquippedGear{
    constructor(){
        this.weapon = null;
        this.head = null;
        this.torso = null;
        this.hands = null;
        this.waist = null;
        this.legs = null;
        this.feet = null;
    }

    equip(item){
        let equipTo = item.equippableTo();
        if(equipTo == "Weapon") {this.weapon = item;}
        if(equipTo == "Head") {this.head = item;}
        if(equipTo == "Hands") {this.hands = item;}
        if(equipTo == "Torso") {this.torso = item;}
        if(equipTo == "Waist") {this.waist = item;}
        if(equipTo == "Legs") {this.legs = item;}
        if(equipTo == "Feet") {this.feet = item;}
    }

    unequip(item){
        let equippedTo = item.equippableTo();
        if(equippedTo == "Weapon") {this.weapon = null;}
        if(equippedTo == "Head") {this.head = null;}
        if(equippedTo == "Hands") {this.hands = null;}
        if(equippedTo == "Torso") {this.torso = null;}
        if(equippedTo == "Waist") {this.waist = null;}
        if(equippedTo == "Legs") {this.legs = null;}
        if(equippedTo == "Feet") {this.feet = null;}
    }

    getWeapon(){return this.weapon;}

    getHead(){return this.head;}

    getHands(){return this.hands;}

    getTorso(){return this.torso;}

    getWaist(){return this.waist;}

    getLegs(){return this.legs;}

    getFeet(){return this.feet;}
}