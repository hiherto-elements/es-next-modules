
import { Assert } from '../../node_modules/@hiherto-elements/assert/Assert.js';
import { AggressiveTokenizer } from '../../src/tokenizers/aggressive-tokenizer.js';


let text =  `foo bar`;
let t = new AggressiveTokenizer();
let r = t.tokenize(text);
Assert.equal(r[0], 'foo');
Assert.equal(r[1], 'bar');
