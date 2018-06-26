const readline = require("readline");

const user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

user.question("What is your name? ", name => {
	user.question("How old are you? ", age => {
		user.question("Please enter your username ", username => {
			console.log(
				`Your name is ${name}, you are ${age} years old, and your username is ${username} `
			);
			user.close();
		});
	});
});

