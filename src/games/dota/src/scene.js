const inquirer = require('inquirer');
const chalk = require('chalk');
const _ = require('lodash');
const changeCase = require('change-case');
const shell = require('shelljs');
const bluebird = require('bluebird');
const creatureModel = require('./creature');
const mechanics = require('./mechanics');
const log = console.log;

let hero_current_level = 1;
let hero_current_exp = 0;

function gainLevel(hero) {
	hero.current_exp = hero.current_exp + 1;
	return hero;
}

function gainExp(hero, exp) {
	hero_current_exp = hero.current_exp;
	hero.current_exp = hero_current_exp + exp;

	if (hero.current_exp >= 100) {
		hero.current_exp = hero.current_exp - 100;
		hero = gainLevel(hero);
		return hero;
	} else {
		return hero;
	}
}

function abilitiesPrompt(hero) {
	let abilities = [];
	_.forOwn(hero.abilities, (value, key) => {
		abilities.push(key);
	});
	abilities.push(new inquirer.Separator());
	abilities.push('Hero Details');
	abilities.push('Enemy Details');

	log(chalk.bold.cyan(`Available Mana: ${hero.current_mana}`));

	inquirer.prompt({
		type: 'list',
		name: 'abilities',
		message: 'Which ability do you want to use?',
		choices: abilities, 
	}).then(answer => {
		log(changeCase.titleCase(answer.abilities));
	}).catch(reject => {
		log(reject);
	});

}

function showHeroDetails(hero) {
	log(
		chalk.green(
			`=========================== ${changeCase.titleCase(
				hero.name
			)} ==========================`
		)
	);
	log(chalk.cyan(`${mechanics.hero[hero.name].description}`));
	log(
		chalk.green(
			`   
    STR:    ${hero.str}
    INT:    ${hero.int}
    AGI:    ${hero.agi} 
    HP:     ${hero.current_hp}
    MANA:   ${hero.current_mana}
    EXP:    ${hero.current_exp}
    LEVEL:  ${hero.current_level}
        `
		)
	);

	_.forOwn(hero.abilities, (value, key) => {
		log(chalk.cyan(`${changeCase.titleCase(key)}`));
		_.forOwn(value, (value, key) => {
			if (typeof value !== 'object') {
				log(chalk.magenta(` ${changeCase.titleCase(key)} : ${value} `));
			} else {
				log(chalk.magenta(' Effects'));
				_.forOwn(value, (value, key) => {
					log(chalk.magenta(`   ${key} : ${value}`));
				});
			}
		});
	});
}

function showEnemyDetails(creature) {
	// log(chalk.red(_.toArray(creature)));
	_.forOwn(creature, (value, key) => {
		log(chalk.magenta(`${key} : ${value}`));
	});
}

function actionPrompt(hero, creature) {
	inquirer
		.prompt({
			type: 'list',
			name: 'action',
			message: 'What do you wanna do?',
			choices: [
				'Attack',
				'Abilities',
				'Use Item',
				new inquirer.Separator(),
				'Hero Details',
				'Enemy Details'
			]
		})
		.then(answer => {
			if (answer.action == 'Hero Details') {
				showHeroDetails(hero);
				actionPrompt(hero, creature);
			} else if (answer.action == 'Enemy Details') {
				showEnemyDetails(creature);
				actionPrompt(hero, creature);
			} else if (answer.action == 'Attack') {
				return heroUseAttack(hero, creature);
			} else if (answer.action == 'Abilities') {
				// return heroUseAbilities(hero, creature);
				abilitiesPrompt(hero);
			} else if (answer.action == 'Use Item') {
				return heroUseItem(hero);
			}
		})
		.catch(reject => {
			log(chalk.red(reject));
		});
}

exports.initScene = hero => {
	hero.current_level = hero_current_level;
	hero.current_exp = hero_current_exp;
	hero.current_hp = hero.baseHp;
	hero.current_mana = hero.baseMana;
	hero.current_damage = hero.baseDamage;
	hero.items = [];

	creature = creatureModel.spawnCreature(hero.current_level);
	creature.current_hp = creature.hp;
	actionPrompt(hero, creature);
};
