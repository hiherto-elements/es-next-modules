import { Assert } from '../../node_modules/@hiherto-elements/assert/Assert.js';
import { SentenceTokenizer } from '../../src/tokenizers/sentence-tokenizer.js';

const res = new SentenceTokenizer().tokenize('The quick brown fox jumps over the fence. All Glory to the hypnotoad');
Assert.equal(res.length, 2, 'Tokenizes to 2 results')
