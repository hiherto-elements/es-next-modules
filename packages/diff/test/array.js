import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { diffArrays } from '../array.js';

let a = [1, 2];
let b = [2, 3];

let res = diffArrays(a, b);
Assert.equal(res.length, 3)