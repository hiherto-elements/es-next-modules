import { test as tddTest, suite, run } from './tdd.js';

const it = tddTest;
const describe = suite;

export const test = {
	tdd: {
		test: tddTest, 
		suite
	},
	bdd: {
		it, describe
	}
}