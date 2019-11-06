
class Elemental {
	constructor(){
		this.attributes = {
			might:0,            // Physical Attack
			projection:0,       // Magical Attack
			vitality:350,       // Health Points
			fortitude:15,       // Armor
			agility:100,        // Speed
			intelligence:20,    	// Level-Up Pts
			willpower:10,       	// Crit Damage
			intimidation:15,    	// Crit Chance
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
		this.attributes.projection 		= 50;
		this.attributes.intelligence	= 30;
		this.attributes.willpower		= 5;
		this.attributes.intimidation	= 5;
	}
}
class Siren extends Elemental{
	constructor(){
		super();
		this.attributes.projection 		= 35;
		this.attributes.vitality		= 400;
		this.attributes.intelligence	= 30;
		this.attributes.willpower		= 5;
	}
}
class Sylph extends Elemental{
	constructor(){
		super();
		this.attributes.might			= 45;
		this.attributes.fortitude		= 10;
		this.attributes.agility			= 120;
		this.attributes.vitality		= 250;
		this.attributes.intimidation 	= 20;
	}
}

class Golom extends Elemental{
	constructor(){
		super();
		this.attributes.might			= 35;
		this.attributes.fortitude 		= 20;
		this.attributes.agility			= 80;
		this.attributes.vitality		= 400;
		this.attributes.willpower		= 5;
	}
}

const salamander = new Salamander();
const siren = new Siren();
const sylph = new Sylph();
const golom = new Golom();


export function get_Race_From_String_From_Elemental_Class(race){
	if(race === "Salamander"){
        return salamander;
    }
    if(race === "Siren"){
        return siren;
	}
	if(race === "Sylph"){
        return sylph;
	}
	if(race === "Golom"){
        return golom;
    }
}

//!!FIX LEVEL-UP GUIDES!!//
export function get_The_levelUp_Guide_For_Elementals(race){

	if(race === "Salamander"){
		let levelUp_Guide = {might:0, projection:20, vitality:50, intelligence:0,
			willpower:0 , agility:5 , fortitude:5 , intimidation:0};
		return levelUp_Guide;
	}
	if(race === "Siren"){
		let levelUp_Guide = {might:0, projection:10, vitality:20, intelligence:1,
			willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
	}
	if(race === "Sylph"){
		let levelUp_Guide = {might:0, projection:10, vitality:20, intelligence:0,
			willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
	}
	if(race === "Golom"){
		let levelUp_Guide = {might:0, projection:10, vitality:20, intelligence:0,
			willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
	}
}
