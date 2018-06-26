const inquirer = require("inquirer");
const chalk = require('chalk');
const heroModel = require('./src/heroes');
const creatureModel = require('./src/creature');
const util = require('./src/util');
const log = console.log;

function menu(){

    let heroes = util.listAllHeroes();
    let currentLevel = 1;

    log(chalk.green('\n========================================================================'));

    inquirer.prompt({
        type: 'list',
        name: 'name',
        message: 'Choose your hero.',
        choices: heroes
    }).then(answer => {
        let hero = heroModel.pickHero(answer.name);
        let creature = creatureModel.spawnCreature(currentLevel);
        current_scene(hero, creature)
            .then(outcome => {
                log(chalk.green('won'));
            })
            .catch(outcome => {
                log(chalk.red('lost'));
            });
    }).catch(reject => {
        log(chalk.red(reject));
    });

}

let current_scene = (hero, creature) => {
    return new Promise((resolve, reject) => {
        let result = util.randArray([true, false]);
        if(result){
            resolve('you won');
        } else {
            reject('you lost');
        }
    });
};

menu();