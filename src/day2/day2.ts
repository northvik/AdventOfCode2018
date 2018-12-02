import {IDay, InputArray} from '../../Interface';
import { BaseDay } from '../baseDay';



export class Day2 extends BaseDay implements IDay {

    public solvePartOne(input: InputArray): number {
        let twos = 0;
        let threes = 0;

        for (let value of input) {
            this.twoLetters(value)?twos++:null
            this.threeLetters(value)?threes++:null
        }

        return twos * threes;
    }

    public solvePartTwo(input: InputArray): number {
        let frequency = 0;
        let frequencyHistory = [0]
        while(true) {
            for (let change of input) {
                if (parseInt(change)){
                    frequency = frequency + parseInt(change)
                    if (frequencyHistory.indexOf(frequency) >= 0) {
                        return frequency;
                    }
                    frequencyHistory.push(frequency)
                }
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
}
