
import { Assert } from '../../node_modules/@hiherto-elements/assert/Assert.js';
import { AggressiveTokenizer } from '../../src/tokenizers/aggressive-tokenizer.js';
import { suite, test, run } from '../../node_modules/@hiherto-elements/test/tdd.js';

suite('default test', ()=> {
    test('basic tokenize', () => {
        let text =  `foo bar`;
        let t = new AggressiveTokenizer();
        let r = t.tokenize(text);
        Assert.equal(r[0], 'foo');
        Assert.equal(r[1], 'bar');
    });
});
run();