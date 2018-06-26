const readline = require("readline");

const user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

user.question("Enter any numbers, eg: 33 44 1123 0584 3 55 1 2", digit => {
    digit.split(" ")
    console.log(digit.split(" ").sort(function(a, b){
        return a-b
    }));
    process.exit();
});
