import { expect } from 'chai';
import 'mocha';
import { Day3 } from '../src/day3/main';

const day = new Day3();
describe('Testing Day 2', () => {
    describe('Part 1', () => {

        it('Should return 4 will passing \'#1 @ 1,3: 4x4 #2 @ 3,1: 4x4 #3 @ 5,5: 2x2', () => {
            expect(day.solvePartOne(['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'])).to.equal(4);
        });

    });

    describe('Part 2', () => {
       
    });
});
