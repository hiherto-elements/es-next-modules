
import Encoder from './Encoder.js';

export const L3Side = {};

/**
 * max scalefactor band, max(SBMAX_l, SBMAX_s*3, (SBMAX_s-3)*3+8)
 */
L3Side.SFBMAX = (Encoder.SBMAX_s * 3);

export default L3Side;