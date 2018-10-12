import { test as tddTest, suite } from './tdd.js';

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