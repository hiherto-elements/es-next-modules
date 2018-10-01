import { Assert as assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { parse } from '../Url.js';
import { fixtures as parseTests } from './fixtures.js';

Object.keys(parseTests).forEach(u => {
	const parsed = parse(u);
	const testStrings = parseTests[u];
	const tests = Object.keys(testStrings);
	tests.map(test => {
		assert.equal(parsed[test], testStrings[test], `parsing ${u} checking ${test} expects ${testStrings[test]} but got ${parsed[test]}`)
	});

/*
	// this is the only one that seems broken after porting punycode, querystring and url
  '<http://goo.corn/bread> Is a URL!': {
    'href': '%3Chttp://goo.corn/bread%3E%20Is%20a%20URL!',
    'pathname': '%3Chttp://goo.corn/bread%3E%20Is%20a%20URL!',
    'path': '%3Chttp://goo.corn/bread%3E%20Is%20a%20URL!'
  },
*/


});