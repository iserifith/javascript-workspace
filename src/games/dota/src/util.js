const mechanics = require('./mechanics');

exports.listAllHeroes = () => {

    let heroes = [];
    
    for (var key in mechanics.hero){
        heroes.push({
            name: key,
            details: mechanics.hero[`${key}`]
        });
    }
    return heroes;
};

exports.randArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

exports.randObject = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
};