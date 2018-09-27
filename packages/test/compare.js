const { Assert } = require('./node_modules/@hiherto-elements/assert/Assert.js');
const {isObject} = require('../isObject');
const LINEBREAKS = /\r\n|\r|\n/;
exports.compare = function compare(test, actual, expected, options = {lines: true}) {
	if (actual === expected) {
		return;
	}
	if (typeof expected === 'function') {
		Assert.ok(expected(actual));
	} else if (typeof actual === 'string' && Object.prototype.toString.call(expected) === '[object RegExp]') {
		Assert.ok(expected.test(actual));
	} else {
		if ((hasLineBreak(actual) || hasLineBreak(expected)) && options.lines) {
			[actual, expected] = [actual, expected].map((string) => isObject(string) ? string : string.split(LINEBREAKS));
		}
		if (isObject(expected)) {
			for (const key of Object.keys(expected)) {
				const value = actual[key];
				test(`${key}${isObject(value) || hasLineBreak(value) ? '' : `: ${JSON.stringify(value)}`}`, (test) => {
					compare(test, value, expected[key], options);
				});
			}
		} else {
			Assert.strictEqual(actual, expected);
		}
	}
};

function hasLineBreak(string) {
	return typeof string === 'string' && LINEBREAKS.test(string);
}