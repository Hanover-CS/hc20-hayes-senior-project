//CharacterClass.js

import census_LookUp from "./Census.js"

export default class Character{
	constructor(name, raceAsString, level = 1, experiance = 0){
		this.name		= name;
		this.level		= level;
		this.attributes = this.raceAsObject = census_LookUp(raceAsString).get_All_Attributes(level);
		this.experiance = experiance;
	}

	get_Name(){return this.name;}

	get_Level(){return this.level;}

	get_All_Attributes(){return this.attributes;}

	get_Experiance(){return this.experiance;}

	attribute_Comparer(object){
		if(this.get_All_Attributes().might === object.get_All_Attributes().might &&
		   this.get_All_Attributes().projection === object.get_All_Attributes().projection &&
		   this.get_All_Attributes().vitality === object.get_All_Attributes().vitality &&
		   this.get_All_Attributes().fortitude === object.get_All_Attributes().fortitude &&
		   this.get_All_Attributes().agility === object.get_All_Attributes().agility &&
		   this.get_All_Attributes().inteligence === object.get_All_Attributes().inteligence &&
		   this.get_All_Attributes().charisma === object.get_All_Attributes().charisma &&
		   this.get_All_Attributes().willpower === object.get_All_Attributes().willpower &&
		   this.get_All_Attributes().intimidation === object.get_All_Attributes().intimidation){
			return true;
		}else{
			return false;
		}
	}
}