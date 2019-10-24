
class Skeleton {
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


const skeleton = new Skeleton();

export function get_Race_From_String_From_Skeleton_Class(race){

	if(race === "Skeleton"){
		return skeleton;
	}
}

export function get_The_levelUp_Guide_For_Skeletons(race){

	if(race === "Skeleton"){
		let levelUp_Guide = {might:1, projection:0, vitality:10, intelligence:0,
			willpower:0 , agility:0 , fortitude:0 , intimidation:0};
		return levelUp_Guide;
    }
}