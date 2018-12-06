import { expect } from 'chai';
import 'mocha';
import { Day2 } from '../src/day2/main';

const day = new Day2();
describe('Testing Day 2', () => {
    describe('Part 1', () => {

        describe('test two letter parsing', () => {
            it('Should return false will passing \'abcdef\'', () => {
                expect(day.twoLetters('abcdef')).to.be.false;
            });

            it('Should return true will passing \'bababc\'', () => {
                expect(day.twoLetters('bababc')).to.be.true;
            });

            it('Should return true will passing \'aabcdd\'', () => {
                expect(day.twoLetters('aabcdd')).to.be.true;
            });
        });

        describe('test three letter parsing', () => {
            it('Should return false will passing \'abcdef\'', () => {
                expect(day.threeLetters('abcdef')).to.be.false;
            });

            it('Should return true will passing \'bababc\'', () => {
                expect(day.threeLetters('bababc')).to.be.true;
            });

            it('Should return true will passing \'ababab\'', () => {
                expect(day.threeLetters('ababab')).to.be.true;
            });
        });

        it('Should return 12 will passing \'abcdef\', \'bababc\', \'abbcde\', \'abcccd\', \'aabcdd\', \'abcdee\', \'ababab\'', () => {
            expect(day.solvePartOne(['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'])).to.equal(12);
        });

    });

    describe('Part 2', () => {
        it('Should return \'fgij\' will passing \'abcde fghij klmno pqrst fguij axcye wvxyz\'', () => {
            expect(day.solvePartTwo(['abcde', 'fghij', 'klmno', 'pqrst', 'fguij', 'axcye', 'wvxyz'])).to.equal('fgij');
        });
    });
});
