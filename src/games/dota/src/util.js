const mechanics = require('./mechanics');
const inquirer = require('inquirer');

exports.log = () => {
	return console.log;
};

exports.listAllHeroes = () => {
	let heroes = [];

	for (var key in mechanics.hero) {
		heroes.push({
			name: key,
			details: mechanics.hero[`${key}`]
		});
	}
	return heroes;
};

exports.attackChances = () => {
	let c = Math.random() * 100;

	if (c < 10) {
		return 'missed';
	} else if (c < 90 && c > 10) {
		return 'hitted';
	} else if (c > 90) {
		return 'critical';
	}
};

exports.randArray = arr => {
	return arr[Math.floor(Math.random() * arr.length)];
};

exports.randObject = obj => {
	var keys = Object.keys(obj);
	return obj[keys[(keys.length * Math.random()) << 0]];
};

exports.listInquirer = (name, message, choices) => {
	return inquirer.prompt({
		type: 'list',
		name: name,
		message: message,
		choices: choices
	});
};
