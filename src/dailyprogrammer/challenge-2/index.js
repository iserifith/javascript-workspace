function calculateMonthtlyPayment(loanAmount, loanPeriod, interestRate) {

	//  loan period must be in month
	// 	monthly interest rate

	let la = loanAmount;
	let lp = loanPeriod;
	let ir = interestRate * lp / 100;

	let mp = Math.round(la * (ir / 12) / (1 - (Math.pow(1 + ir/12, -lp))));

	console.log(mp);

}

const readline = require("readline");

const user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

user.question("Enter loan amount ", loanAmount => {
	user.question("Enter loan period in month ", loanPeriod => {
		user.question("Enter interest rate per month ", interestRate => {
			calculateMonthtlyPayment(loanAmount, loanPeriod, interestRate);
			user.close();
		});
	});
});



