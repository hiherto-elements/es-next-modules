import { Assert as assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { Sweetie } from '../Sweetie.js';

assert.equal(typeof Sweetie, "function");
assert.equal(typeof Sweetie.globalize, "function");
var s = new Sweetie();
assert.equal(typeof s, "object");
assert.equal(typeof s.env, "object");
assert.equal(s.env, s.context);
// "should add a test to the current context when nested"
var s  = new Sweetie(),
t  = function() {},
t2 = function(done) {};


s.describe("one", function() {
	s.it("one", t);

	s.describe("two", function() {
			s.it("two");
			s.it("three", t2);
	});
});
