import {IDay, InputArray} from '../../Interface';
import { BaseDay } from '../baseDay';



export class Day2 extends BaseDay implements IDay {

    public solvePartOne(input: InputArray): number {
        let twos = 0;
        let threes = 0;

        for (let value of input) {
            if (value.length > 0) {
                this.twoLetters(value)?twos++:null
                this.threeLetters(value)?threes++:null
            }
        }

        return twos * threes;
    }

    public solvePartTwo(input: InputArray): string {
        const sortInput = input.sort();
        for (let index = 1; index < sortInput.length; index++) {
            const diffPos = this.findFirstDiffPos(sortInput[index], sortInput[index - 1]);

            const current = sortInput[index].substring(0, diffPos) + sortInput[index].substring(diffPos + 1, sortInput[index].length);
            const previous = sortInput[index - 1].substring(0, diffPos) + sortInput[index - 1].substring(diffPos + 1, sortInput[index - 1].length);
            if (current == previous) {
                return current;
            }
        }
        return null;
    }

    public twoLetters(input: string): boolean {
        if (input) {
            for (let char of input) {
                if (this.count(char, input) == 2){
                    return true
                }
            }
        }
        return false;
    }

    public threeLetters(input: string): boolean {
        if (input) {
            for (let char of input) {
                if (this.count(char, input) == 3){
                    return true
                }
            }
        }
        return false;
    }

    private count(char: string, input: string): number {
            return (input.length - input.replace(new RegExp(char,"g"), '').length) / char.length;
    }

    private findFirstDiffPos(a: string, b: string): number {
        var longerLength = Math.max(a.length, b.length);
        for (var i = 0; i < longerLength; i++)
        {
            if (a[i] !== b[i]) return i;
        }
        return -1;
    }
}
