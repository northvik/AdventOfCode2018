import {IDay, InputArray} from '../../Interface';
import { BaseDay } from '../baseDay';

export type ISurface = {
    id: number;
    x: number;
    y: number;
    w: number;
    h: number;
}

export class Day3 extends BaseDay implements IDay {

    public solvePartOne(inputs: InputArray) {
        let fabric = [];
        for (let input of inputs) {
            let surface = this.parse(input[0])
        }

        return null;
    }

    public solvePartTwo(_input: InputArray): string {
        return null;
    }

    protected parse(input: string): ISurface {
        const regexp = /#([0-9]*) @ ([0-9]*),([0-9]*): ([0-9]*)x([0-9]*)/gm;
        const result = regexp.exec(input);
        return {
            id: parseInt(result[1]),
            x: parseInt(result[2]),
            y: parseInt(result[3]),
            w: parseInt(result[4]),
            h: parseInt(result[5])
        }
    }
}
