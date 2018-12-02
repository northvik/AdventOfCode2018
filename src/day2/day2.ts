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

    public solvePartTwo(input: InputArray): number {
       
        return input[0];
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
}
