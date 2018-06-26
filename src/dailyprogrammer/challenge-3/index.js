function cyper(input, numberOfShifts) {
	if (numberOfShifts < 0) return caesarShift(input, numberOfShifts + 26);

	var output = "";

	for (var i = 0; i < input.length; i++) {
		var shifter = input[i];

		if (shifter.match(/[a-z]/i)) {
			var code = input.charCodeAt(i);

			if (code >= 65 && code <= 90)
				shifter = String.fromCharCode(
					((code - 65 + numberOfShifts) % 26) + 65);
			else if (code >= 97 && code <= 122)
				shifter = String.fromCharCode(
					((code - 97 + numberOfShifts) % 26) + 97);
		}
		output += shifter;
	}

	return output;
}

console.log(cyper("HELLO WORLD HELLO WORLD", 17));