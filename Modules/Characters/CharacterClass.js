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
		this.unalteredVitality 		= this.get_All_Attributes().vitality;
		this.unalteredProjection 	= this.get_All_Attributes().projection;
		this.unalteredMight 		= this.get_All_Attributes().might;
		this.unalteredFortitude 	= this.get_All_Attributes().fortitude;
		this.unalteredAgility 		= this.get_All_Attributes().agility;
	}

	// Accessors
	get_Name(){return this.name;}

	get_Level(){return this.level;}

	get_All_Attributes(){return this.attributes;}

	get_Experience(){return this.experience;}

	getUnalteredVitality(){return this.unalteredVitality;}

	getUnalteredProjection(){return this.unalteredProjection;}

	getUnalteredMight(){return this.unalteredMight;}

	getUnalteredFortitude(){return this.unalteredFortitude;}

	get_Level_Up_Points(){return this.level_Up_Points;}

	getEquippedGear(){return this.equipment.getEquippedGear();}

	// Mutators
	level_Up(){
		this.get_All_Attributes().might 		+= this.level_Up_Guide.might;
		this.get_All_Attributes().projection 	+= this.level_Up_Guide.projection;
		this.get_All_Attributes().vitality 		+= this.level_Up_Guide.vitality;
		this.get_All_Attributes().fortitude 	+= this.level_Up_Guide.fortitude;
		this.get_All_Attributes().agility 		+= this.level_Up_Guide.agility;
		this.get_All_Attributes().intelligence 	+= this.level_Up_Guide.intelligence;
		this.get_All_Attributes().willpower 	+= this.level_Up_Guide.willpower;
		this.get_All_Attributes().intimidation 	+= this.level_Up_Guide.intimidation;
		
		this.unalteredVitality += this.level_Up_Guide.vitality;
		this.unalteredProjection += this.level_Up_Guide.projection;
		this.unalteredFortitude += this.level_Up_Guide.fortitude;
		this.unalteredMight += this.level_Up_Guide.might;
		
		this.add_Level_Up_Points(this.get_All_Attributes().intelligence);
		
		this.level += 1;
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
		} else {return false;}
	}

	add_Level_Up_Points(intelligence){this.level_Up_Points = intelligence / 2;}

	apply_Level_Up_Points(stat){
		this.level_Up_Points += -1;

		if (stat == "vitality")		this.get_All_Attributes().vitality += this.allocationGuide.vitality;
		if (stat == "might")		this.get_All_Attributes().might += this.allocationGuide.might;
		if (stat == "projection")	this.get_All_Attributes().projection += this.allocationGuide.projection;
		if (stat == "intelligence")	this.get_All_Attributes().intelligence += this.allocationGuide.intelligence;
		if (stat == "willpower")	this.get_All_Attributes().willpower += this.allocationGuide.willpower;
		if (stat == "agility")		this.get_All_Attributes().agility += this.allocationGuide.agility;
		if (stat == "fortitude")	this.get_All_Attributes().fortitude += this.allocationGuide.fortitude;
		if (stat == "intimidation")	this.get_All_Attributes().intimidation += this.allocationGuide.intimidation;

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
		this.get_All_Attributes().projection = (this.getUnalteredProjection() + this.equipment.getStats().projection);
	}
}
