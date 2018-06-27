const mechanics = require('./mechanics');

class Heroes {
	constructor(name, str, agi, int, primary, abilities) {
		this.name = name;
		this.str = str;
		this.agi = agi;
		this.int = int;
		this.primary = primary;
		this.abilities = abilities;
	}

	get baseDamage() {
		if (this.primary == 'strength') {
			return this.str * 2;
		} else if (this.primary == 'agility') {
			return this.agi * 2;
		} else if (this.primary == 'intelligence') {
			return this.int * 2;
		}
	}

	get baseHp() {
		return this.str * mechanics.heroesAttributes[this.primary].baseHp;
	}

	get baseArmor() {
		return this.agi * mechanics.heroesAttributes[this.primary].baseArmor;
	}

	get baseMana() {
		return this.int * mechanics.heroesAttributes[this.primary].baseMana;
	}

	static abilities() {
		return this.abilities;
	}
}


/**
 * 
 * @param {string} name 
 */
exports.pickHero = name => {
	let attr = mechanics.hero[name].attributes;
	var hero = new Heroes(
		name,
		attr.str,
		attr.agi,
		attr.int,
		attr.primary,
		mechanics.hero[name].abilities
	);
	return hero;
};
