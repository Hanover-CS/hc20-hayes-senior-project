
export default class Zombie {
	constructor(){
		this.attributes = {
			attack:0,
			vitality:55,
			fortitude:2,
			agility:5,
			intelligence:0,
			willpower:0,
			intimidation:2,
		}
	}
	get_All_Attributes(){
		let copy_Of_Attributes = Object.assign({}, this.attributes)
		return copy_Of_Attributes;
	}

	getZombie(){return rotting_Zombie;}
}

class Rotting extends Zombie{
	constructor(){
        super();
		this.attributes.fortitude 	= 0;	// Defence
	}
	levelUpGuide(){
			let levelUp_Guide = { 
				attack:10, 
				vitality:10, 
				intelligence:0,
				willpower:0, 
				agility:0, 
				fortitude:0, 
				intimidation:0};
			return levelUp_Guide;
		}
}

const rotting_Zombie = new Rotting();
