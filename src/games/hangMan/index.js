const readline = require("readline");
const chalk = require("chalk");
const util = require("./util");

const log = console.log;
const divider = util.divider;

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

user.prompt();

let chances = "";
let guesses = [];
let guess = [];
let rounds = 10;
let currentRound = 1;
let started = false;
let hangMan = "";

function init() {
  if (started == false) {
    log(
      chalk.blue([
        util.divider("Pick a difficulty. 1.Easy, 2.Medium, 3.Hard  ")
      ])
    );

    user.question("", ans => {
      if (isNaN(ans)) {
        log(chalk.red.bold(divider("Must be a number!")));
        init();
        return;
      }

      if (ans == "") {
        init();
        return;
      }

      if (ans < 0 && ans > 3) {
        lose();
      }

      if (ans == 1) {
        chances = 10;
        hangMan = util.hangManEasy;
      } else if (ans == 2) {
        chances = 8;
        hangMan = util.hangManMedium;
      } else {
        chances = 5;
        hangMan = util.hangManHard;
      }

      started = true;

      q = util.q[Math.floor(Math.random() * util.q.length)].toLowerCase();

      play(q);
    });
  } else {
    q = util.q[Math.floor(Math.random() * util.q.length)].toLowerCase();
    play(q);
  }
}

/**
 * 
 * @param {string} q 
 */
function play(q) {

  var regexp = new RegExp(chances, "g");
  hangMan = hangMan.replace(regexp, " ");

  log(
    chalk.green(
      divider(
        `Round ${currentRound}. The word contains ${q.length} letters. 
        \n "Enter an alphabet. Or enter "help" but it wil cost you one chance. 
        \n ${guess}
      ${hangMan}`
      )
    )
  );

  user.question("", ans => {
    if (!isNaN(ans)) {
      log("1");
      play(q);
      return;
    }

    if (!ans) {
      log("2");
      play(q);
      return;
    }

    if (ans.length > 1 && ans != "help") {
      log("3");
      play(q);
      return;
    }

    if (ans == "help") {
      chances = chances - 1;
      log(
        chalk.redBright(
          divider(
            `${util.fisherYates(q.split(""))} . ${chances} chances remaining!`
          )
        )
      );
      play(q);
      return;
    }

    // Determine wether the answer already been entered
    if (util.isInArray(ans, guesses)) {
      log(chalk.red([divider("You entered that already!")]));

      log(chalk.green(divider(guesses)));

      play(q);
      return;
    }

    guesses.push(ans);
    qArray = q.split("");

    // If the alphabet exists in the word
    if (util.isInArray(ans, qArray)) {
      // Replace ' _ ' with the alphabet
      replaceArray(q, ans);

      // If the word is guessed completely, they have won.
      if (q == guess.join("")) {
        won();
        return;
      }

      right(q);
    } else {
      wrong(q);
    }
  });
}

/**
 * 
 * @param {string} q 
 */
function right(q) {
  currentRound = currentRound++;
  play(q);
}

/**
 * 
 * @param {string} q 
 */
function wrong(q) {
  if (chances > 1) {
    chances--;
    log(chalk.red.bold(divider(`Noob. ${chances} chances remaining.`)));
    play(q);
  } else {
    lose();
  }
}

function lose() {
  log(chalk.red.bold(divider("Lmao Noob!")));
  process.exit();
}

function won() {
  log(chalk.green.bold(divider("That is right!")));

  if (currentRound != rounds) {
    currentRound++;
    guesses = [];
    guess = [];
    init();
  } else {
    log(
      chalk.green.bold(divider(`Congratulations, you won. Play again? Y/N `))
    );

    user.question("", ans => {
      if (ans.toUpperCase() == "Y") {
        currentRound = 1;
        guess = [];
        guesses = [];
        init();
      } else {
        log(
          chalk.green.bold(
            divider(`You only lasted till round ${currentRound}. Goodbye`)
          )
        );
        process.exit();
      }
    });
  }
}

/**
 * 
 * @param {Array} qArray 
 * @param {string} ans 
 */
function replaceArray(qArray, ans) {
  if (guess.length != qArray.split("").length) {
    for (let i = 0; i < qArray.split("").length; i++) {
      guess.push(" _ ");
    }
  }

  for (let i = 0; i < qArray.split("").length; i++) {
    if (ans == qArray[i]) {
      guess[i] = ans;
    }
  }
}

init();
