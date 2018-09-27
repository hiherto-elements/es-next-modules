
import { assert } from 'chai';
import { replacer, flip, merge } from '../../src/util/utils';

describe('utils', ()=>{
	it('replacer exist', ()=>{
		assert.ok(replacer); 
	})
	it('flip exist', ()=>{
		assert.ok(flip); 
	})
	it('merge exist', ()=>{
		assert.ok(merge); 
	})
})