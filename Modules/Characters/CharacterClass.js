import Census from "./Census.js";
import Equipment from "../Equipment/Equipment.js";

let census = new Census;

export default class Character{
	constructor(name, raceAsString){
		this.level_Up_Guide 	= census.levelUpGuide(raceAsString);
		this.allocationGuide 	= census.allocation_Guide(raceAsString);
		this.attributes 		= census.lookUp(raceAsString).get_All_Attributes();
		this.equipment 			= new Equipment;
		this.name				= name;
		this.level				= 1;
		this.experience 		= 0;
		this.level_Up_Points 	= 0;
		this.unalteredVitality 		= this.attributes.vitality;
		this.unalteredAttack 		= this.attributes.attack;
		this.unalteredFortitude 	= this.attributes.fortitude;
		this.unalteredAgility 		= this.attributes.agility;
	}

	// Accessors
	get_Name(){return this.name;}

	get_Level(){return this.level;}

	get_All_Attributes(){return this.attributes;}

	get_Experience(){return this.experience;}

	getUnalteredVitality(){return this.unalteredVitality;}

	getUnalteredAttack(){return this.unalteredAttack;}

	getUnalteredFortitude(){return this.unalteredFortitude;}

	get_Level_Up_Points(){return this.level_Up_Points;}

	getEquippedGear(){return this.equipment.getEquippedGear();}

	// Mutators
	level_Up(){
		this.get_All_Attributes().attack 		+= this.level_Up_Guide.attack;
		this.get_All_Attributes().vitality 		+= this.level_Up_Guide.vitality;
		this.get_All_Attributes().fortitude 	+= this.level_Up_Guide.fortitude;
		this.get_All_Attributes().agility 		+= this.level_Up_Guide.agility;
		this.get_All_Attributes().intelligence 	+= this.level_Up_Guide.intelligence;
		this.get_All_Attributes().willpower 	+= this.level_Up_Guide.willpower;
		this.get_All_Attributes().intimidation 	+= this.level_Up_Guide.intimidation;
		
		this.unalteredVitality += this.level_Up_Guide.vitality;
		this.unalteredAttack += this.level_Up_Guide.attack;
		this.unalteredFortitude += this.level_Up_Guide.fortitude;
		
		this.add_Level_Up_Points(this.get_All_Attributes().intelligence);
		
		this.level += 1;
	}

	add_Experience(number){return this.experience += number;}


	attribute_Comparer(object){
		let attributeSet1 = this.get_All_Attributes();
		let attributeSet2 = object.get_All_Attributes();
		return attributeSet1.attack 		=== attributeSet2.attack &&
			attributeSet1.vitality 			=== attributeSet2.vitality &&
		   	attributeSet1.fortitude 		=== attributeSet2.fortitude &&
		  	attributeSet1.agility 			=== attributeSet2.agility &&
		   	attributeSet1.intelligence 		=== attributeSet2.intelligence &&
		   	attributeSet1.willpower 		=== attributeSet2.willpower &&
		   	attributeSet1.intimidation 		=== attributeSet2.intimidation;
	}

	add_Level_Up_Points(intelligence){this.level_Up_Points = intelligence / 2;}

	apply_Level_Up_Points(stat){
		this.level_Up_Points += -1;
		this.get_All_Attributes()[stat] += this.allocationGuide[stat];

		if (stat == "vitality"){this.unalteredVitality += this.allocationGuide.vitality;}
		else if (stat == "attack"){this.unalteredAttack += this.allocationGuide.attack;}
		else if (stat == "fortitude"){this.unalteredFortitude += this.allocationGuide.fortitude;}
	}

	equip(item){
		this.equipment.equip(item);
		this.updateStats();
	}

	unequip(item){
		this.equipment.unequip(item);
		this.updateStats();
	}

	updateStats(){
		this.get_All_Attributes().attack = (this.getUnalteredAttack() + this.equipment.getStats().attack);
		this.get_All_Attributes().vitality = (this.getUnalteredVitality() + this.equipment.getStats().vitality);
		this.get_All_Attributes().fortitude = (this.getUnalteredFortitude() + this.equipment.getStats().fortitude);
	}

	isEquippable(item){
		return this.equipment.isEquippable(item);
	}
}
