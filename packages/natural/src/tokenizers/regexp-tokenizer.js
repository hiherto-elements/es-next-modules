import Tokenizer from './tokenizer.js';

// Base Class for RegExp Matching
export class RegexpTokenizer extends Tokenizer {
    constructor(options) {
				super();
        var options = options || {};
        this._pattern = options.pattern || this._pattern;
        this.discardEmpty = options.discardEmpty || true;

        // Match and split on GAPS not the actual WORDS
        this._gaps = options.gaps;

        if (this._gaps === undefined) {
            this._gaps = true;
        }
    }

    tokenize(s) {
        let results;

        function without(results) {
            const EMPTY_STING = '';
            const BLANK_SPACE = ' ';
            return results
                .filter(result => result !== EMPTY_STING)
                .filter(result => result !== BLANK_SPACE)
        }

        if (this._gaps) {
            results = s.split(this._pattern);
            return (this.discardEmpty) ? without(results) : results;
        } else {
            return s.match(this._pattern);
        }
    }
}
