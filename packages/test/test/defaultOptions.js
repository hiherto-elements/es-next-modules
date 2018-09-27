// test
import { defaultOptions } from '../defaultOptions.js';
import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
Assert.true(typeof defaultOptions === 'function');
const res = defaultOptions();
Assert.true(typeof res === 'object');
Assert.equal(res.timeout, 1001)
