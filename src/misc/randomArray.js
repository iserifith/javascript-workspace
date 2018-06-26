const chalk = require('chalk');
const log = console.log;

let randArray = (arr) => {

    return arr[Math.floor(Math.random() * arr.length)];

};

let init = () => {

    return randArray(['a','b']);
};

init();