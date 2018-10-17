import { Assert } from '../Assert.js';

class Foo {}
let bar = new Foo;
/** @test Assert#instanceOf */
Assert.instanceOf(bar, Foo);