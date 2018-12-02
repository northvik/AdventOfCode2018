import { expect } from 'chai';
import 'mocha';
import { Day1 } from '../src/day1/day1';

const day = new Day1();
describe('Testing Millisecond 1', () => {
    describe('Part 1', () => {

        it('Should return 3 will passing \'+1-2+3+1\'', () => {
            expect(day.solvePartOne(['+1', '-2', '+3', '+1'])).to.equal(3);
        });

        it('Should return 3 will passing \'+1+1+1\'', () => {
            expect(day.solvePartOne(['+1', '+1', '+1'])).to.equal(3);
        });

        it('Should return 0 will passing \'+1+1-2\'', () => {
            expect(day.solvePartOne(['+1', '+1', '-2'])).to.equal(0);
        });

        it('Should return -6 will passing \'-1-2-3\'', () => {
            expect(day.solvePartOne(['-1', '-2', '-3'])).to.equal(-6);
        });
    });

    // describe('Part 2', () => {

    //     it('Should return 6 will passing \'1212\'', () => {
    //         expect(day.solvePartTwo(['1212'])).to.equal(6);
    //     });
    // });
});
