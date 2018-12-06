import {IDay, InputArray} from '../../Interface';
import { BaseDay } from '../baseDay';

export class Day1 extends BaseDay implements IDay {

    public solvePartOne(input: InputArray): number {
        let frequency = 0;
        input.forEach(change => {
            if (parseInt(change)){
                frequency = frequency + parseInt(change)
            }
        });
        return frequency;
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
}
