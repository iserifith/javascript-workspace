const mechanics = require('./mechanics');
const util = require('./util');

class Creatures {
    
    constructor(name, hp, gold_given, exp_given, damage_per_attack){
        this.name = name;
        this.hp = hp;
        this.gold_given = gold_given;
        this.exp_given = exp_given;
        this.damage_per_attack = damage_per_attack;
    }
}

exports.spawnCreature = (level) => {

    let possibleCreatures = mechanics.creature(level);
    return spawnCreature = util.randObject(possibleCreatures);


}