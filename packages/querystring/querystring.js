import { decode } from './decode.js';
import { encode } from './encode.js';

export const querystring = {
	decode, 
	parse: decode,
	encode, 
	strifgify: encode
};