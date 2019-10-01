//CharacterClass.js

export default class Character{
	constructor(name, race, level = 1, experiance = 0){
		this.name		= name;
		this.level		= level;
		// this.race		= census_LookUp(race);
		// this.attributes = this.race.getAttributes(level);
		this.experiance = experiance;
	}

	get_Name(){return this.name;}

	get_Level(){return this.level;}

	// getRace(){return this.race;}

	// get_Attributes(){return this.attributes;}

	get_Experiance(){return this.experiance;}
}