
export default class Skeleton {
	constructor() {
		this.attributes = {
			attack: 100,
			vitality: 55,
			fortitude: 2,
			agility: 125,
			intelligence: 0,
			willpower: 0,
			intimidation: 2,
		}
	}

	get_All_Attributes() {
		let copy_Of_Attributes = Object.assign({}, this.attributes)
		return copy_Of_Attributes;
	}

	getSkeleton() { return skeleton; }

	levelUpGuide() {
		let levelUp_Guide = {
			attack: 30,
			vitality: 40,
			intelligence: 0,
			willpower: 0,
			agility: 0,
			fortitude: 10,
			intimidation: 0
		};
		return levelUp_Guide;
	}
}


const skeleton = new Skeleton();