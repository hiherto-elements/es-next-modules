import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { Diff } from '../diff.js';
Assert.isFunction(Diff)
let diff = new Diff();
Assert.instanceOf(diff, Diff)

let a = 'foo';
let b = 'foobar';
let res = diff.diff(a, b)

Assert.equal(res.length, 2, 'foo to foobar gets 2 changes');
Assert.equal(res[0].count, 3, 'found out that the first unchaged string is 3 chars long');
Assert.equal(res[0].value, 'foo', 'foo is the found string');

Assert.equal(res[1].count, 3, 'change starts at 3');
Assert.equal(res[1].value, 'bar', 'bar is the found string');

let c = 'barfoo';
let d = 'foobar';
res = diff.diff(c, d)
Assert.equal(res.length, 3);