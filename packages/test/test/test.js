import { Assert } from '../node_modules/@hiherto-elements/assert/Assert.js';
import { test } from '../test.js';
Assert.equal(typeof test, 'object');
Assert.isFunction(test.bdd.it);
Assert.isFunction(test.bdd.describe);
Assert.isFunction(test.tdd.test);
Assert.isFunction(test.tdd.suite);


