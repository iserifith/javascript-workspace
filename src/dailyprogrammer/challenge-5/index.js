const readline = require("readline");

function __contructor() {
	const user = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	user.question("Username ", username => {
		user.question("Password ", password => {
			user.close();
			login([username, password]);
		});
	});
}

function login(input = []) {
	let username = "administrator";
	let password = "password";

	if (username == input[0] && password == input[1]) {
		authenticated();
	} else {
		console.log("Wrong password, pls try again");

		__contructor();
	}
}

function authenticated() {
	console.log("authenticated");
}

__contructor();