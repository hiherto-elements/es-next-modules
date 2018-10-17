// test
import { Assert } from '../Assert.js';
/** @test {Assert#true} */
Assert.true(true);
/** @test {Asser#false} */
Assert.false(false);
/** @test {Asser#equal} */
Assert.equal(1, 1);
/** @test {Asser#ok} */
Assert.ok(true);
/** @test {Asser#strictEqual} */
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

Assert.equal({foo:null}, {foo:null}, 'should not trigger a error')