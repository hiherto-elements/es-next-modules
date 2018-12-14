import {
    new_int
} from './common.js';

import { GrInfo } from './GrInfo.js';

export function IIISideInfo() {
    this.tt = [[null, null], [null, null]];
    this.main_data_begin = 0;
    this.private_bits = 0;
    this.resvDrain_pre = 0;
    this.resvDrain_post = 0;
    this.scfsi = [new_int(4), new_int(4)];

    for (let gr = 0; gr < 2; gr++) {
        for (let ch = 0; ch < 2; ch++) {
            this.tt[gr][ch] = new GrInfo();
        }
    }
}

export default IIISideInfo;