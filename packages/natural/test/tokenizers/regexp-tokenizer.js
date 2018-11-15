import { Assert } from '../../node_modules/@hiherto-elements/assert/Assert.js';
import { RegexpTokenizer } from '../../src/tokenizers/regexp-tokenizer.js';
Assert.isFunction(RegexpTokenizer);
const res = new RegexpTokenizer({
    pattern: /^The/
}).tokenize('The quick brown');
