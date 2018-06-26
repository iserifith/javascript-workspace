const fs = require("fs");
const log = console.log;

fs.readFile("pg1661.txt", "utf8", (error, data) => {
    startIndex = data.search("To Sherlock");
    endIndex = data.search("End of the Project");
    data = data.slice(startIndex, endIndex);
    data = data.replace(new RegExp('\W', 'g'), '');
    log(data.length);

});
