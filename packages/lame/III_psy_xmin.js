import Encoder from './Encoder.js';
import {
    System,
    new_float,
    new_float_n
} from './common.js';

export function III_psy_xmin() {
    this.l = new_float(Encoder.SBMAX_l);
    this.s = new_float_n([Encoder.SBMAX_s, 3]);

    const self = this;
    this.assign = iii_psy_xmin => {
        System.arraycopy(iii_psy_xmin.l, 0, self.l, 0, Encoder.SBMAX_l);
        for (let i = 0; i < Encoder.SBMAX_s; i++) {
            for (let j = 0; j < 3; j++) {
                self.s[i][j] = iii_psy_xmin.s[i][j];
            }
        }
    }
}

export default III_psy_xmin;