import {
    new_float, 
    new_int
} from './common.js';

export function CalcNoiseData() {
    this.global_gain = 0;
    this.sfb_count1 = 0;
    this.step = new_int(39);
    this.noise = new_float(39);
    this.noise_log = new_float(39);
}

export default CalcNoiseData;