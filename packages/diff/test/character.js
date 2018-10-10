import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { diffChars } from '../character.js';

let a = 'bar';
let b = 'bbaz';
let res = diffChars(a, b);
Assert.equal(res.length, 5);