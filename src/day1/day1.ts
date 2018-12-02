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

    public solvePartTwo(input: InputArray): string {
        return 'todo' + input[0];
    }
}
