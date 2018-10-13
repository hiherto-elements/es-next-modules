
import { Assert } from '../../node_modules/@hiherto-elements/assert/Assert.js';
import { CaseTokenizer } from '../../src/tokenizers/case-tokenizer.js';

Assert.isFunction(CaseTokenizer); 
const res = new CaseTokenizer().tokenize('The quick brown fox jumps over the fence. All Glory to the hypnotoad');
Assert.equal(res.length, 13, 'Tokenizes to 2 results')
