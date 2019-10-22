
class Zombie {
	constructor(){
		this.attributes = {
			might:5,
			projection:0,
			vitality:50,
			fortitude:2,
			agility:5,
			intelligence:0,
			charisma:0,
			willpower:0,
			intimidation:2,
		}
	}
	get_All_Attributes(){
		let copy_Of_Attributes = Object.assign({}, this.attributes)
		return copy_Of_Attributes;
	}
}

class Rotting extends Zombie{
	constructor(){
        super();
		this.attributes.fortitude 	= 0;	// Defence
	}
}

const rotting_Zombie = new Rotting();

export function get_Race_From_String_From_Zombie_Class(race){

	if(race === "Rotting Zombie"){
		return rotting_Zombie;
	}
}

export function get_The_levelUp_Guide_For_Zombies(race){

	if(race === "Rotting Zombie"){
		let levelUp_Guide = {might:1, projection:0, vitality:10, intelligence:0,
					charisma:0 , willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
    }
}