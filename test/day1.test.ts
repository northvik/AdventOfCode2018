import { expect } from 'chai';
import 'mocha';
import { Day1 } from '../src/day1/day1';

const day = new Day1();
describe('Testing Day 1', () => {
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

    describe('Part 2', () => {

        it('Should return 2 will passing \'+1-2+3+1+1-2\'', () => {
            expect(day.solvePartTwo(['+1', '-2', '+3', '+1', '+1', '-2'])).to.equal(2);
        });

        it('Should return 0 will passing \'+1-1\'', () => {
            expect(day.solvePartTwo(['+1', '-1'])).to.equal(0);
        });

        it('Should return 10 will passing \'+3+3+4-2-4\'', () => {
            expect(day.solvePartTwo(['+3', '+3', '+4', '-2', '-4'])).to.equal(10);
        });

        it('Should return 5 will passing \'-6, +3, +8, +5, -6\'', () => {
            expect(day.solvePartTwo(['-6', '+3', '+8', '+5', '-6'])).to.equal(5);
        });

        it('Should return 14 will passing \'+7, +7, -2, -7, -4\'', () => {
            expect(day.solvePartTwo(['+7', '+7', '-2', '-7', '-4'])).to.equal(14);
        });
    });
});
