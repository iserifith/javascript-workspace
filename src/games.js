#!/usr/bin/env node
const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const log = console.log;
const spawn = require('child_process').spawn;

function gameList() {
	shell.cd('src/games');
	var ls = shell.ls('');
	let games = [];

	for (var i = 0; i < ls.length; i++) {
		games.push(ls[i]);
	}
	return games;
}

function execGame(game) {
	shell.cd(game);
	spawn('node', ['index.js'], {
		stdio: 'inherit'
	});
}

function selectGamePrompt(games) {
	return inquirer
		.prompt({
			type: 'list',
			name: 'game',
			message: 'Select a game to play.',
			choices: games
		})
		.then(answer => {
			execGame(answer.game);
		})
		.catch(reject => {
			log(chalk.red(reject));
    	});
}

exports.init = () => {
    selectGamePrompt(gameList());
};

