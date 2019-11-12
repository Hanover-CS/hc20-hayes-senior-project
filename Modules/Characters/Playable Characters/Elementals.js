
export default class Elemental {
	constructor(){
		this.attributes = {
			might:0,            // Physical Attack
			projection:0,       // Magical Attack
			vitality:350,       // Health Points
			fortitude:15,       // Armor
			agility:100,        // Speed
			intelligence:20,    // Level-Up Pts
			willpower:10,       // Crit Damage
			intimidation:15,    // Crit Chance
		}
	}

	get_All_Attributes(){
		let copy_Of_Attributes = Object.assign({}, this.attributes)
			return copy_Of_Attributes;
	}

	getElemental(race){
		if(race === "Salamander")return salamander;
		if(race === "Siren")return siren;
		if(race === "Sylph")return sylph;
		if(race === "Golom")return golom;
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
	
	levelUp_Guide() {
		let levelUp_Guide= {
			might:0,
			projection:20, 
			vitality:50, 
			intelligence:0,
			willpower:0, 
			agility:5, 
			fortitude:5, 
			intimidation:0};
		return levelUp_Guide;
	}

	allocation_Guide(){ 
		let allocation_Guide = {
			might:10, 
			projection:10, 
			vitality:10, 
			intelligence:10,
			willpower:10, 
			agility:10, 
			fortitude:10, 
			intimidation:10};
		return allocation_Guide;
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

	levelUp_Guide(){
		let levelUp_Guide = {
			might:0, 
			projection:10, 
			vitality:20, 
			intelligence:1,
			willpower:0,
			 agility:0, 
			 fortitude:0, 
			 intimidation:0};
		return levelUp_Guide;
	}

	allocation_Guide(){ 
		let levelUp_Guide = {
			might:10, 
			projection:10, 
			vitality:10, 
			intelligence:10,
			willpower:10, 
			agility:10, 
			fortitude:10, 
			intimidation:10};
		return levelUp_Guide;
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

	levelUp_Guide(){
		let levelUp_Guide = {
			might:0, 
			projection:10, 
			vitality:20, 
			intelligence:0,
			willpower:0, 
			agility:0, 
			fortitude:0, 
			intimidation:0};
		return levelUp_Guide;
	}
	
	allocation_Guide(){ 
		let levelUp_Guide = {
			might:10, 
			projection:10, 
			vitality:10, 
			intelligence:10,
			willpower:10, 
			agility:10, 
			fortitude:10, 
			intimidation:10};
		return levelUp_Guide;
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

	levelUp_Guide(){
		let levelUp_Guide = {might:0, 
			projection:10, 
			vitality:20, 
			intelligence:0,
			willpower:0, 
			agility:0, 
			fortitude:0, 
			intimidation:0};
		return levelUp_Guide;
	}

	allocation_Guide(){ 
		let levelUp_Guide = {might:10, 
			projection:10, 
			vitality:10, 
			intelligence:10,
			willpower:10, 
			agility:10, 
			fortitude:10, 
			intimidation:10};
		return levelUp_Guide;
}
}

const salamander = new Salamander();
const siren = new Siren();
const sylph = new Sylph();
const golom = new Golom();

