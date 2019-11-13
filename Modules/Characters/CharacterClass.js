//CharacterClass.js

import Census from "./Census.js";

let census = new Census;

export default class Character{
	constructor(name, raceAsString){
		this.name		= name;
		this.level		= 1;
		this.attributes = this.raceAsObject = census.lookUp(raceAsString).get_All_Attributes();
		this.tempHp 	= this.get_All_Attributes().vitality;
		this.experience = 0;
		this.level_Up_Guide = census.levelUpGuide(raceAsString);
		this.allocationGuide = census.allocation_Guide(raceAsString);
		this.level_Up_Points = 0;
	}

	// Accessors
	get_Name(){return this.name;}

	get_Level(){return this.level;}

	get_All_Attributes(){return this.attributes;}

	get_Experience(){return this.experience;}

	get_TempHp(){
		return this.tempHp;
	}

	get_Level_Up_Points(){
		return this.level_Up_Points;
	}

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

		this.tempHp += this.level_Up_Guide.vitality;

		this.add_Level_Up_Points(this.get_All_Attributes().intelligence);

	}

	add_Experience(number){return this.experience += number;}


	attribute_Comparer(object){
		if(this.get_All_Attributes().might 			=== object.get_All_Attributes().might &&
		   this.get_All_Attributes().projection 	=== object.get_All_Attributes().projection &&
		   this.get_All_Attributes().vitality 		=== object.get_All_Attributes().vitality &&
		   this.get_All_Attributes().fortitude 		=== object.get_All_Attributes().fortitude &&
		   this.get_All_Attributes().agility 		=== object.get_All_Attributes().agility &&
		   this.get_All_Attributes().intelligence 	=== object.get_All_Attributes().intelligence &&
		   this.get_All_Attributes().willpower 		=== object.get_All_Attributes().willpower &&
		   this.get_All_Attributes().intimidation 	=== object.get_All_Attributes().intimidation){
			return true;
		}else{
			return false;
		}
	}

	add_Level_Up_Points(intelligence){
		this.level_Up_Points = intelligence / 2;
	}

	apply_Level_Up_Points(stat){
		if (stat == "vitality"){
			console.log(this.allocationGuide.vitality)
			this.get_All_Attributes().vitality += this.allocationGuide.vitality;
		}

		if (stat == "might"){
			this.get_All_Attributes().might += this.allocationGuide.might;
		}

		if (stat == "projection"){
			this.get_All_Attributes().projection += this.allocationGuide.projection;
		}

		if (stat == "intelligence"){
			this.get_All_Attributes().intelligence += this.allocationGuide.intelligence;
		}

		if (stat == "willpower"){
			this.get_All_Attributes().willpower += this.allocationGuide.willpower;
		}

		if (stat == "agility"){
			this.get_All_Attributes().agility += this.allocationGuide.agility;
		}

		if (stat == "fortitude"){
			this.get_All_Attributes().fortitude += this.allocationGuide.fortitude;
		}

		if (stat == "intimidation"){
			this.get_All_Attributes().intimidation += this.allocationGuide.intimidation;
		}

		this.level_Up_Points += -1;
	}
}