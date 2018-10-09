import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { Diff } from '../diff.js';
Assert.isFunction(Diff)
let d = new Diff();
Assert.instanceOf(d, Diff)
let a = 'fooLong';
let b = 'foobar';
let res = d.diff(a, b)
