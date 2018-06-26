#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');
const log = console.log;
const challenge = require('./src/challenge');
const cats = require('./src/cat');
const games = require('./src/games');
const misc = require('./src/misc');
const spawn = require("child_process").spawn;
const shell = require("shelljs");

program
	.command('list')
	.alias('l')
	.description('list all completed challenges')
	.action(() => {
		challenge.init();
	});

program
	.command('challenge <number>')
	.alias('c')
	.description('choose a challenge by number')
	.action(number => {
		challenge.readFilePrompt(`src/dailyprogrammer/challenge-${number}/`);
	});

program
	.command('play')
	.alias('p')
	.description('list all games')
	.action(() => {
		games.init();
	});

program
	.command('misc')
	.alias('m')
	.description('list of misc stuff')
	.action(() => {
		misc.init();
	});

program
	.command('cats')
	.description('display cat faces. coz it cute')
	.action(() => {
        log(cats.catFaces());
    });

program.on('--help', () => {
	log(chalk.green());
});

program
	.version('1.0.0')
	.description('Daily Programming Challenge')
	.parse(process.argv);
