/**
 * Layer III side information.
 *
 * @author Ken
 *
 */

import {
    System,
    new_int
} from './common.js';


import { Encoder } from './Encoder.js';

export function ScaleFac(arrL, arrS, arr21, arr12) {

    this.l = new_int(1 + Encoder.SBMAX_l);
    this.s = new_int(1 + Encoder.SBMAX_s);
    this.psfb21 = new_int(1 + Encoder.PSFB21);
    this.psfb12 = new_int(1 + Encoder.PSFB12);
    const l = this.l;
    const s = this.s;

    if (arguments.length == 4) {
        //public ScaleFac(final int[] arrL, final int[] arrS, final int[] arr21,
        //    final int[] arr12) {
        this.arrL = arguments[0];
        this.arrS = arguments[1];
        this.arr21 = arguments[2];
        this.arr12 = arguments[3];

        System.arraycopy(this.arrL, 0, l, 0, Math.min(this.arrL.length, this.l.length));
        System.arraycopy(this.arrS, 0, s, 0, Math.min(this.arrS.length, this.s.length));
        System.arraycopy(this.arr21, 0, this.psfb21, 0, Math.min(this.arr21.length, this.psfb21.length));
        System.arraycopy(this.arr12, 0, this.psfb12, 0, Math.min(this.arr12.length, this.psfb12.length));
    }
}

export default ScaleFac;