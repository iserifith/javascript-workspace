#!/usr/bin/env node
const inquirer = require("inquirer");
const shell = require("shelljs");
const log = console.log;
const spawn = require("child_process").spawn;

function challengeList() {
    shell.cd('src/dailyprogrammer');
	var ls = shell.ls("");
	let files = [];

	for (var i = 0; i < ls.length; i++) {
		if (ls[i].match(/challenge/)) {
			files.push(ls[i]);
		}
	}
	return files;
}

exports.readFilePrompt = function(file){
    shell.cd(file);
    spawn('node', ['index.js'], {
        stdio: 'inherit'
    });
};

exports.challengePrompt = function(files){
    return inquirer
    .prompt({
        type: "list",
        name: "challenge",
        message: "Select One",
        choices: files
    })
    .then(answer => {
        this.readFilePrompt(answer.challenge);
    })
    .catch(reject => {
        log(reject);
    });
}

exports.init = function() {
	var files = challengeList();
	this.challengePrompt(files);
};
