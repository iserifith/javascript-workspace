const readline = require("readline");

const user = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let filter = function(sentence, keys){
    return sentence.replace(new RegExp('[' + keys + ']*', 'g'), '');
};

user.question('Enter a sentence ', word => {
    user.question('Enter letters to filter ', keys => {
        console.log(filter(word.toLowerCase(), keys.toLowerCase()));
        user.close();
    });
});

