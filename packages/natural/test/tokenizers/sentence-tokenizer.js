
import { assert } from 'chai';
import { SentenceTokenizer } from '../../src/tokenizers/sentence-tokenizer';

describe('SentenceTokenizer', ()=>{
	it('exist', ()=>{
		assert.ok(SentenceTokenizer); 
	})
	
	it('tokenizes', ()=>{
		const res = new SentenceTokenizer().tokenize('The quick brown fox jumps over the fence. All Glory to the hypnotoad');
		assert.equal(res.length, 2, 'Tokenizes to 2 results')
	})


})