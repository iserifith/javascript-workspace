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


/**
 * 
 * @param {number} level 
 */
exports.spawnCreature = (level) => {
    possibleCreatures = mechanics.creature(level);
    spawnCreature = util.randObject(possibleCreatures);
    return new Creatures(spawnCreature.name, spawnCreature.hp, spawnCreature.gold_given, spawnCreature.exp_given, spawnCreature.damage_per_attack);
};