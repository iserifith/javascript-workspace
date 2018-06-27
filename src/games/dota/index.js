const inquirer = require('inquirer');
const chalk = require('chalk');
const heroModel = require('./src/heroes');
const scene = require('./src/scene');
const util = require('./src/util');
const log = console.log;

function menu() {
	let heroes = util.listAllHeroes();

	log(chalk.green('\n======================================================='));

	inquirer
		.prompt({
			type: 'list',
			name: 'name',
			message: 'Choose your hero.',
			choices: heroes
		})
		.then(answer => {
			scene.initScene(heroModel.pickHero(answer.name));
		})
		.catch(reject => {
			log(chalk.red(reject));
		});
}

menu();
