class FatZombie {
	constructor(){
		this.attributes = {
			might:5,
			projection:0,
			vitality:50,
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
}

const fat_Zombie = new FatZombie();

export function get_Race_From_String_From_FatZombie_Class(race){

	if(race === "Fat Zombie"){
		return fat_Zombie;
	}
}