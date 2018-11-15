import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { test, suite, stats, plan } from '../tdd.js';
Assert.isFunction(test);
Assert.isFunction(suite);
Assert.isFunction(stats);

suite('foo', ()=>{});
let res = stats();
Assert.equal(res.suites.length, 1);
test('bar', ()=>{});
res = stats();
