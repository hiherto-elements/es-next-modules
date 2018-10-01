// test
import { Assert } from '../Assert.js';
Assert.true(true);
Assert.false(false);
Assert.equal(1, 1);
Assert.ok(true);
Assert.strictEqual(true, true);



let c = {
	c: 1
};
let d = {
	c: 1
};


let a = [1, 2];
let b = [1, 2];

Assert.deepEqual(a, b);
Assert.deepEqual(c, d);

