import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { test, suite, stats, plan, run } from '../tdd.js';

let counts = [];

suite('basic integration test for tdd', ()=>{
	test('foo', ()=>{
		counts.push(true);
	});
	test('bar', ()=>{
		counts.push(false);
	});
})

plan();

let tests = stats();
Assert.equal(tests.suites.length, 1)
Assert.equal(tests.suites[0].tests.length, 2);
run();
Assert.equal(counts[0], true);
Assert.equal(counts[1], false);

