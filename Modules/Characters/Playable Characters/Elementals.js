
class Elemental {
	constructor(){
		this.attributes = {
			might:0,            // Physical Attack
			projection:0,       // Magical Attack
			vitality:100,       // Health Points
			fortitude:10,       // Armor
			agility:15,         // Speed
			intelligence:10,    // Level-Up Pts
			willpower:10,       // Crit Damage
			intimidation:10,    // Crit Chance
		}
	}
	get_All_Attributes(){
		let copy_Of_Attributes = Object.assign({}, this.attributes)
			return copy_Of_Attributes;
	}
}

class Salamander extends Elemental{
	constructor(){
		super();
		this.attributes.fortitude 	= 5;	// Defence
		this.attributes.projection 	= 25;	// Magic attack
		this.attributes.intelligence	= 15;
		this.attributes.willpower	= 13;
	}
}
class Siren extends Elemental{
	constructor(){
		super();
		this.attributes.projection 	= 15;	// Magic attack
		this.attributes.vitality	= 125;
	}

}

const salamander = new Salamander();
const siren = new Siren();


export function get_Race_From_String_From_Elemental_Class(race){
	if(race === "Salamander"){
        return salamander;
    }
    if(race === "Siren"){
        return siren;
    }
}

export function get_The_levelUp_Guide_For_Elementals(race){

	if(race === "Salamander"){
		let levelUp_Guide = {might:0, projection:20, vitality:50, intelligence:5,
			willpower:5 , agility:5 , fortitude:5 , intimidation:5};
		return levelUp_Guide;
	}
	if(race === "Siren"){
		let levelUp_Guide = {might:0, projection:10, vitality:20, intelligence:0,
			willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
	}
}
