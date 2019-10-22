//CharacterClass.js

import {census_LookUp, get_The_LevelUp_Guide} from "./Census.js"

export default class Character{
	constructor(name, raceAsString){
		this.name		= name;
		this.level		= 1;
		this.attributes = this.raceAsObject = census_LookUp(raceAsString).get_All_Attributes();
		this.experience = 0;
		this.level_Up_Guide = get_The_LevelUp_Guide(raceAsString);
	}

	// Accessors
	get_Name(){return this.name;}

	get_Level(){return this.level;}

	get_All_Attributes(){return this.attributes;}

	get_Experience(){return this.experience;}


	// Mutators
	level_Up(){
		this.level += 1;
		this.get_All_Attributes().might 		+= this.level_Up_Guide.might;
		this.get_All_Attributes().projection 	+= this.level_Up_Guide.projection;
		this.get_All_Attributes().vitality 		+= this.level_Up_Guide.vitality;
		this.get_All_Attributes().fortitude 	+= this.level_Up_Guide.fortitude;
		this.get_All_Attributes().agility 		+= this.level_Up_Guide.agility;
		this.get_All_Attributes().intelligence 	+= this.level_Up_Guide.intelligence;
		this.get_All_Attributes().charisma 		+= this.level_Up_Guide.charisma;
		this.get_All_Attributes().willpower 	+= this.level_Up_Guide.willpower;
		this.get_All_Attributes().intimidation 	+= this.level_Up_Guide.intimidation;

	}

	add_Experience(number){
		return this.experience += number;
	}


	attribute_Comparer(object){
		if(this.get_All_Attributes().might 			=== object.get_All_Attributes().might &&
		   this.get_All_Attributes().projection 	=== object.get_All_Attributes().projection &&
		   this.get_All_Attributes().vitality 		=== object.get_All_Attributes().vitality &&
		   this.get_All_Attributes().fortitude 		=== object.get_All_Attributes().fortitude &&
		   this.get_All_Attributes().agility 		=== object.get_All_Attributes().agility &&
		   this.get_All_Attributes().intelligence 	=== object.get_All_Attributes().intelligence &&
		   this.get_All_Attributes().charisma 		=== object.get_All_Attributes().charisma &&
		   this.get_All_Attributes().willpower 		=== object.get_All_Attributes().willpower &&
		   this.get_All_Attributes().intimidation 	=== object.get_All_Attributes().intimidation){
			return true;
		}else{
			return false;
		}
	}
}