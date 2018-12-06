import fs = require('fs-extra');
import { Day1 } from './src/day1/main';
import { Day2 } from './src/day2/main';

let contents, Day, list;

const constructors = {
    Day1: Day1,
    Day2: Day2

};

const cache = JSON.parse(fs.readFileSync('./cache.json').toString());

// tslint:disable-next-line
console.log('\n\n############### CAPTCHA RESULT ###############\n');

for (let i = 1; i <= Object.keys(constructors).length; i++) {
    contents = fs.readFileSync('./src/Day' + i + '/input.txt').toString();
    list = contents.split('\n');
    Day = new constructors['Day' + i]();
// tslint:disable-next-line
    console.log('Day ' + i + ':');
    if (cache['day' + i]) {
        if (cache['day' + i].partOne) {
            // tslint:disable-next-line
            console.log('     Part 1 cache: ' + cache['day' + i].partOne);
        } else {
            // tslint:disable-next-line
            console.log('     Part 1: ' + Day.solvePartOne(list));
        }
        if (cache['day' + i].partTwo) {
            // tslint:disable-next-line
            console.log('     Part 2 cache: ' + cache['day' + i].partTwo);
        } else {
            // tslint:disable-next-line
            console.log('     Part 2: ' + Day.solvePartTwo(list));
        }
    } else {
        // tslint:disable-next-line
        console.log('     Part 1: ' + Day.solvePartOne(list) + '\n     Part 2: ' +Day.solvePartTwo(list));
    }
}
