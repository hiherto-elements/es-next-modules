import Tokenizer from './tokenizer.js';

export class AggressiveTokenizer extends Tokenizer {
    constructor() {
        super();    
    }

    tokenize(text) {
        // break a string up into an array of tokens by anything non-word
        return this.trim(text.split(/\W+/));
    }
}

export default AggressiveTokenizer;