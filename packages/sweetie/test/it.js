import { Assert as assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { Sweetie } from '../Sweetie.js';

var s = new Sweetie();

s.it("one", function() {});

assert.equal(s.context.__tests.length, 1);