import fs = require('fs-extra');
import { Day1 } from './src/Day1/Day1';

let contents, Day, list;

const constructors = {
    Day1: Day1
};

// tslint:disable-next-line
console.log('\n\n############### CAPTCHA RESULT ###############\n');

for (let i = 1; i <= Object.keys(constructors).length; i++) {
    contents = fs.readFileSync('./src/Day' + i + '/input.txt').toString();
    list = contents.split('\n');
    Day = new constructors['Day' + i]();
// tslint:disable-next-line
    console.log('Day ' + i + ':');
// tslint:disable-next-line
    console.log('     Part 1: ' + Day.solvePartOne(list) + '\n     Part 2: ' +Day.solvePartTwo(list));
}
