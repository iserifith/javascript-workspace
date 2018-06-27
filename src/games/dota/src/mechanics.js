exports.heroesAttributes = {
	strength: {
		baseHp: '22.5',
		hpGen: '20',
		baseMana: '10',
		baseArmor: '10'
	},
	agility: {
		baseHp: '15.5',
		hpGen: '10',
		baseMana: '10',
		baseArmor: '22.5'
	},
	intelligence: {
		baseHp: '15.5',
		hpGen: '10',
		baseMana: '20',
		baseArmor: '22.5'
	}
};

exports.hero = {
	crystal_maiden: {
		alt: 'Rylai',
		description:
			'Rylai, the Crystal Maiden, is a ranged intelligence hero who uses the power of frost and ice to cope with her foes.',
		attributes: {
			primary: 'intelligence',
			str: '18',
			agi: '16',
			int: '30'
		},
		abilities: {
			crystal_nova: {
				description: 'A burst of damaging frost slows enemy movement.',
				mana_cost: 100,
				damage: 210,
				cooldown: 2,
				effects: {
					slow: 2
				}
			},
			frostbite: {
				description:
					'Encases an enemy unit in ice, prohibiting movement and attack,',
				mana_cost: 140,
				damage: 250,
				cooldown: 1,
				effects: {
					stun: 1
				}
			},
			ice_wall: {
				description:
					'Generates a wall of solid ice directly in front of Crystal Maiden',
				mana_cost: 100,
				damage: 300,
				cooldown: 5,
				effects: {
					slow: 5
				}
			},
			freezing_field: {
				description:
					'Surrounds Crystal Maiden with random frostbit and icy explosions that slow enemies and deal massive damage.',
				mana_cost: 400,
				damage: 500,
				cooldown: 10,
				effects: {
					slow: 5,
					stun: 3
				}
			}
		}
	},
	juggernaut: {
		alt: 'Yunero',
		description:
			'Yurnero the Juggernaut is a melee agility hero whose abilities allow him to sprint into battle and recklessly devastate enemies in an impenetrable flurry of blades.',
		attributes: {
			primary: 'agility',
			str: '21',
			agi: '26',
			int: '14'
		},
		abilities: {
			crystal_nova: {
				description: 'A burst of damaging frost slows enemy movement.',
				mana_cost: 100,
				damage: 210,
				cooldown: 2,
				effects: {
					slow: 2
				}
			},
			frostbite: {
				description:
					'Encases an enemy unit in ice, prohibiting movement and attack,',
				mana_cost: 140,
				damage: 250,
				cooldown: 1,
				effects: {
					stun: 1
				}
			},
			ice_wall: {
				description:
					'Generates a wall of solid ice directly in front of Crystal Maiden',
				mana_cost: 100,
				damage: 300,
				cooldown: 5,
				effects: {
					slow: 5
				}
			},
			freezing_field: {
				description:
					'Surrounds Crystal Maiden with random frostbit and icy explosions that slow enemies and deal massive damage.',
				mana_cost: 400,
				damage: 500,
				cooldown: 10,
				effects: {
					slow: 5,
					stun: 3
				}
			}
		}
	}
};

exports.creature = level => {
	const level_1_10 = {
		Satyr: {
			name: 'Satyr',
			hp: 200,
			gold_given: 40,
			exp_given: 50,
			damage_per_attack: 10,
			ressistance: {
				magic: 15
			},
			abilities: {
				strike_lightning: {
					damage: 10
				}
			}
		},
		Golem: {
			name: 'Golem',
			hp: 200,
			gold_given: 50,
			exp_given: 60,
			damage_per_attack: 30,
			ressistance: {
				magic: 50
			},
			abilities: {
				spawnMinions: {
					damage: 10
				}
			}
		}
	};

	if (level < 10) {
		return level_1_10;
	}
};
