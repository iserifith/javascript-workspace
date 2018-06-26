exports.q = ['johor', 'kedah', 'kelantan', 'melaka', 'Negeri Sembilan', 
'Pahang', 'Penang', 'Perak', 'Perlis', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu'];

exports.isInArray = function(value, array){
    return array.indexOf(value) > -1;
};

exports.fisherYates = function(array){
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 != currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

exports.divider = function (ans){

    return [
        '============================================================================================\n' +
        ans + 
        '\n=============================================================================================='
    ];

};

exports.hangManHard = `
0000000000000
0           0
0           1
0         1 1 1
0           1
0          323
0         3 2 3
0        3  2  3
0          4 4
0         4   4
0        4     4
0       4       4
0
0
0
`;

exports.hangManMedium = `
0000000000000
0           0
0           1
0         1 1 1
0           1
0          324
0         3 2 4
0        3  7  4
0          7 7
0         5   6
0        5     6
0       5       6
0
0
0
`;

exports.hangManEasy = `

0000000000000
0           0
0           1
0         1 1 1
0           1
0          324
0         3 2 4
0        5  6  5
0          6 6
0         7   7
0        8     8
0       9       9
0
0
0
`;