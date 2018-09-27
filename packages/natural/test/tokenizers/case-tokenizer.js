
import { assert } from 'chai';
import { CaseTokenizer } from '../../src/tokenizers/case-tokenizer';

describe('CaseTokenizer', ()=>{
	it('exist', ()=>{
		assert.ok(CaseTokenizer); 
	});
	it('tokenizes', ()=>{
		const res = new CaseTokenizer().tokenize('The quick brown fox jumps over the fence. All Glory to the hypnotoad');
		assert.equal(res.length, 13, 'Tokenizes to 2 results')
	});
})