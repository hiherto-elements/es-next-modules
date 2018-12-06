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
});


let wellKnown = 'http://foo.com/.well-known/example';
let parsedUrl = parse(wellKnown);
console.log(parsedUrl);
