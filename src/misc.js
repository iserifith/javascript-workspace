#!/usr/bin/env node
const inquirer = require('inquirer');
const shell = require('shelljs');
const chalk = require('chalk');
const log = console.log;


function miscList() {
	shell.cd('src/misc');
	var ls = shell.ls('');
	let list = [];

	for (var i = 0; i < ls.length; i++) {
		list.push(ls[i]);
	}
	return list;
}

function execMisc(misc) {
    // log(shell.exec(`less ${misc}`));
    // shell.exec(`node ${misc}`, function(code, stdout, stderr) {
    //     // console.log('Exit code:', code);
    //     console.log('Program output:', stdout);
    //     // console.log('Program stderr:', stderr);
    //   });


	// let child = shell.exec(`node ${misc}`, { async: true });
	// child.stdout.on(data => {
    //     log(data);
    // });
}

function selectMisc(list) {
	return inquirer
		.prompt({
			type: 'list',
			name: 'misc',
			message: 'Select one.',
			choices: list
		})
		.then(answer => {
			execMisc(answer.misc);
		})
		.catch(reject => {
			log(chalk.red(reject));
		});
}

exports.init = () => {
    selectMisc(miscList());
};
